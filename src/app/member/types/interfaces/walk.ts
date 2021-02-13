import { WalkType } from "../enums/enumWalkType";
export interface Walk {
    walkId: string,
    startedOn: string, 
    endOn?: string,
    kind: WalkType
}