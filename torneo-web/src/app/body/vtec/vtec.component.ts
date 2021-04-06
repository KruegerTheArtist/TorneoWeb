import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/shared/application-state.service';

@Component({
  selector: 'app-vtec',
  templateUrl: './vtec.component.html',
  styleUrls: ['./vtec.component.scss']
})
export class VtecComponent implements OnInit {
  vtec = false;
  sir = false;
  hatch = false;
  euroR = false;
  sirT = false;
  f18 = false;
  f20 = false;
  FWD = false;
  MT = false;
  AT = false;
  constructor(
    public appState: ApplicationStateService
  ) { 


  }

  ngOnInit() {
    // this.vtec = this.appState.getUserKit().includes('Vtec');
    // this.sir = this.appState.getUserKit().includes('Sir');
    // this.hatch = this.appState.getUserKit().includes('Люк');
    // this.euroR = this.appState.getUserKit().includes('Euro-R');
    // this.sirT = this.appState.getUserKit().includes('Sir-T');
    // this.f18 = this.appState.getUserKit().includes('1.8');
    // this.f20 = this.appState.getUserKit().includes('2.0');
    // this.FWD = this.appState.getUserKit().includes('4WD');
    // this.MT = this.appState.getUserKit().includes('МКПП');
    // this.AT = this.appState.getUserKit().includes('АКПП');
  }

}
