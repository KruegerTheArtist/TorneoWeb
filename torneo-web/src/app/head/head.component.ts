import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../shared/application-state.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  click = false;
  constructor(private appState: ApplicationStateService) { }

  ngOnInit() {
  }

  vvv() {
    this.click = !this.click;
    this.appState.setClick(this.click);
  }

}
