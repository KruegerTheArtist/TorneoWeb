import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationStateService } from 'src/app/shared/application-state.service';
import { ConfigurationModel } from 'src/app/shared/models/configuration.model';
import { EngineEnumExt } from 'src/app/shared/enums/engine.enum';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit, OnDestroy {
  transmisssion = this.fb.control(null);
  wheelDrive = this.fb.control(null);
  modification = this.fb.control(null);
  hp = this.fb.control(null);

  model = this.fb.group({
    hp: this.hp,
    transmission: this.transmisssion,
    modification: this.modification,
    wheelDrive: this.wheelDrive
  })
  vtec: HTMLElement;
  configuration: ConfigurationModel = new ConfigurationModel();
  // transmission = 'Не выбран тип трансмиссии';
  kitArray = ['Люк', 'МКПП', 'АКПП', '1.8', '2.0', '4WD', 'Sir', 'Sir-T', 'Euro-R']
  engineArray = EngineEnumExt.getAllEngineNames();

  constructor(public appState: ApplicationStateService,
    public fb: FormBuilder) {
    this.engineArray
    this.configuration.hp = 0;
    this.configuration.transmission = 'МКПП';
    this.configuration.wheelDrive = '4WD'
    this.configuration.modification = [];
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.appState.getUserKit());
    if (this.transmisssion.value === null) { this.transmisssion.setValue('Не выбран тип трансмиссии') }
    if (this.wheelDrive.value === null) { this.wheelDrive.setValue('Не выбран тип привода') }
    if (this.modification.value === null) { this.modification.setValue(['Не выбрана модификация']) }
    if (this.hp.value === null) { this.hp.setValue(0) }
    console.log(this.model);
    

    // if (this.appState.getUserKit().includes('МКПП')) {
    //   this.configuration.transmission = 'МКПП';
    // }
    // if (this.appState.getUserKit().includes('АКПП')) {
    //   this.configuration.transmission = 'АКПП';
    // }
    // if (this.appState.getUserKit().includes('4WD')) {
    //   this.configuration.wheelDrive = '4WD';
    // }
    // if (this.appState.getUserKit().includes('Люк')) {
    //   this.configuration.modification.push('Люк');
    // }
    // if (this.appState.getUserKit().includes('Sir')) {
    //   this.configuration.modification.push('Sir');
    //   this.configuration.hp = 180;
    //   this.hp.setValue(180)
    //   this.configuration.transmission = 'АКПП';
    // }
    // if (this.appState.getUserKit().includes('Sir-T')) {
    //   console.log('зашел');

    //   this.configuration.modification.push('Sir-T');
    //   this.configuration.hp = 200;
    //   this.hp.setValue(200)
    //   this.configuration.transmission = 'МКПП';
    // }
    // if (this.appState.getUserKit().includes('Euro-R')) {
    //   this.hp.setValue(220)

    //   this.configuration.modification.push('Euro-R');
    // }
    // if (this.appState.getUserKit().includes('1.8')) {
    //   this.hp.setValue(140)
    //   this.configuration.hp = 140;
    // }
    // if (this.appState.getUserKit().includes('2.0')) {
    //   this.hp.setValue(150)
    //   this.configuration.hp = 150;
    // }
  }

  ngOnDestroy() {
  console.log(this.model);
  
  }

  addNewOption(kit: any) {
    console.log(kit);
    // if(!this.appState.getUserKit().includes(kit)) {
    //   this.appState.setUserKit(kit);
    // } else {}
  }

  includeKit(kit: string) {
      // return this.appState.getUserKit().includes(kit);
  }

  applyChanges() {
    console.log(this.model.value);
    
    this.appState.setUserKit(this.model.value)
  }


}
