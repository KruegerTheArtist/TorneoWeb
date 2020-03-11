import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationStateService } from '../shared/application-state.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  vtec: HTMLElement;
  kitArray = ['Люк', 'МКПП', 'АКПП', '1.8', '2.0', '4WD', 'Sir', 'Sir-T', 'Euro-R']
  constructor(public appState: ApplicationStateService) {
    console.log(appState.getUserKit());
    

  }

  ngOnDestroy() {
    console.log('1111');
    
  }

  ppp(e: MouseEvent) {
    this.vtec.style.position = 'absolute';
    document.body.appendChild(this.vtec);
    this.moveAt(e);

    this.vtec.style.zIndex = '1000'; // над другими элементами

  }

  moveAt(e) {
    var coords = this.getCoords(this.vtec);

    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    this.vtec.style.left = e.pageX - shiftX + 'px';
    this.vtec.style.top = e.pageY - shiftY + 'px';
  }
  ccc(e: MouseEvent) {
    this.moveAt(e);

  }

  bbb() {
    document.onmousemove = null;
    this.vtec.onmouseup = null;
  }

  getCoords(vtec: HTMLElement) {
    var box = vtec.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  aaa(kit: any) {
    console.log(kit);
    this.appState.setUserKit(kit);
  }

  includeKit(kit: string) {
    return this.appState.getUserKit().includes(kit)
  }

  ngOnInit() {
    this.vtec = document.getElementById('vtec1');

  }

}
