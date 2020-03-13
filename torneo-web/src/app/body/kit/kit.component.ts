import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationStateService } from 'src/app/shared/application-state.service';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit, OnDestroy {
  vtec: HTMLElement;
  kitArray = ['Люк', 'МКПП', 'АКПП', '1.8', '2.0', '4WD', 'Sir', 'Sir-T', 'Euro-R']
  constructor(public appState: ApplicationStateService) {
    console.log(appState.getUserKit());
    

  }

  ngOnDestroy() {
    console.log('1111');

  }

  bbb() {
    document.onmousemove = null;
    this.vtec.onmouseup = null;
  }

  aaa(kit: any) {
    console.log(kit);
    this.appState.setUserKit(kit);
  }

  includeKit(kit: string) {
    return this.appState.getUserKit().includes(kit);
  }

  ngOnInit() {
    console.log(this.appState.getUserKit());
    
  }

}
