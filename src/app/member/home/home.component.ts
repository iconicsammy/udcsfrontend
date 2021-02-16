import { Component, OnInit } from '@angular/core';
import { WalkService } from '../../services/walk.service';
import { changeDateToString } from '../helpers/helpers';
import { WalkType } from '../types/enums/enumWalkType';
import { Walk } from '../types/interfaces/walk';
import { WalkAction } from '../types/interfaces/walkAction';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public walks: Walk[] = [];
  public walkTypes: string[] = [];

  constructor(private service: WalkService, private spinner: NgxSpinnerService) { 
    for(let walkType in WalkType){
      this.walkTypes.push(walkType)
    }
  }

  startWalking = (walkType: string) => {
    const startOn = changeDateToString(new Date())
    let wType : WalkType;
    switch (walkType){
      case WalkType.fast:
        wType = WalkType.fast;
        break;
        case WalkType.medium:
          wType = WalkType.medium;
          break;
        case WalkType.slow:
          wType = WalkType.slow;
          break;
          default:
            wType = WalkType.slow;
            break;
    }
    const walk : Walk = {
      walkId: (Math.floor(Math.random() * 6000000) + 100000).toString() ,
      kind: wType,
      startedOn: startOn,
      endOn: undefined
    };
    this.spinner.show();
   this.service.addNewWalk(walk).subscribe(done=>{
     walk.walkId = done["item"].walkId;
     this.walks.push(walk);
     this.spinner.hide();
   },err=>{
     alert('sorry cant add your item')
     this.spinner.hide();
   })
  }

  walkAction = (action: WalkAction) =>{
     if (action.action === 'delete'){
       this.walks = this.walks.filter(d=>{
         return d.walkId !== action.walk.walkId
       })
     }
  }

  getWalks = () =>{
    this.spinner.show();
  this.walks = [];
    this.service.fetchMyWalks()
    .subscribe(data=>{
      this.walks = data['items'];
      this.spinner.hide();
    }, err=>{
      alert('There was an error getting your walks...try to relogin')
      this.spinner.hide();
    });
  }

  ngOnInit(): void {
this.getWalks();
  }

}
