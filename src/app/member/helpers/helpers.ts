import { WalkType } from "../types/enums/enumWalkType";
import { Walk } from "../types/interfaces/walk";

export function changeDateToString(d: Date): string{
return  d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " +
d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

export function calculateSteps(walk: Walk): number{
    let steps = 0;
    if ( walk.endOn ){
    const startedOn = new Date(walk.startedOn).getTime();
    const endOn = new Date(walk.endOn!).getTime();
    const kind: WalkType = walk.kind;

    
    const differenceMinutes = ( endOn - startedOn) / 60000;

    if (kind === WalkType.fast){
       steps = differenceMinutes * 120;
    }else if (kind === WalkType.medium){
        steps = differenceMinutes * 60;
    }else{
        steps = differenceMinutes * 30;
    }

}
    return steps;

}