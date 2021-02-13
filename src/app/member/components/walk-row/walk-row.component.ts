import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { WalkService } from 'src/app/services/walk.service';
import { Walk } from '../../types/interfaces/walk';
import { WalkAction } from '../../types/interfaces/walkAction';
import { changeDateToString, calculateSteps } from "../../helpers/helpers";

@Component({
  selector: 'tr[app-walk-row]',
  templateUrl: './walk-row.component.html'
})
export class WalkRowComponent implements OnInit {
  @Input() walk!: Walk;
  @Output() walkEntryEvent = new EventEmitter<WalkAction>();

  constructor(private service: WalkService) { 
  }

  finish = () =>{
    if (this.walk.endOn){
      alert('this is already finished walk....');
      return false;
    }
    const date  = changeDateToString(new Date())
    this.service.updateWalk(this.walk.walkId, date).subscribe(done=>{
       this.walk.endOn = date;
    }, err=>{
      alert('error finishing the walk')
    })
 
    return true;
  }

  getSteps = (): number => {
    return calculateSteps(this.walk);
  }
  public deleteWalk = () => {
      const option = confirm("are you sure you want to delete the walk entry?")
      if (!option){
        return;
      }
    
    this.service.deleteWalk(this.walk.walkId).subscribe(deleted=>{
      this.walkEntryEvent.emit({
        action: "delete",
        walk: this.walk
      })
    }, err=>{
      alert("Error deleting the walk entry")
    })
  }


  ngOnInit(): void {
  }

}
