import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationStateService } from '../shared/application-state.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  vtec: HTMLElement;
  kitArray = ['Люк', 'МКПП', 'АКПП', '1.8', '2.0', '4WD', 'Sir', 'Sir-T', 'Euro-R']
  constructor(public appState: ApplicationStateService) {
    console.log(appState.getUserKit());
    

  }

  // ngOnDestroy() {
  //  // console.log('1111');

  // }

  // bbb() {
  //   document.onmousemove = null;
  //   this.vtec.onmouseup = null;
  // }

  // aaa(kit: any) {
  //   console.log(kit);
  //   this.appState.setUserKit(kit);
  // }

  // includeKit(kit: string) {
  //   return this.appState.getUserKit().includes(kit);
  // }

  ngOnInit() {
    console.log(this.appState.getUserKit());
    
  }

}
