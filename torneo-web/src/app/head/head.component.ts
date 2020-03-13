import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../shared/application-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  click = false;
  constructor(
    private appState: ApplicationStateService,
    //public router: Router
    ) { }

  ngOnInit() {
  }

  vvv() {
    this.click = !this.click;
  //  this.appState.setClick(this.click);
  }

}
