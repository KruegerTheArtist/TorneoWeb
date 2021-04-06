import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationStateService } from 'src/app/shared/application-state.service';
import { ConfigurationModel } from 'src/app/shared/models/configuration.model';
import { EngineEnumExt, EngineEnum } from 'src/app/shared/enums/engine.enum';

import { FormBuilder } from '@angular/forms';
import { TransmissionEnumExt, TransmissionEnum } from 'src/app/shared/enums/transmission.enum';
import { WheelDriveEnumExt, WheelDriveEnum } from 'src/app/shared/enums/wheel-drive.enum';
import { ModificationEnum, ModificationEnumExt } from 'src/app/shared/enums/modification.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit, OnDestroy {

  ModificationEnum = ModificationEnum;
  EngineEnum = EngineEnum;


  transmission = this.fb.control(null);
  wheelDrive = this.fb.control(null);
  modification = this.fb.control(null);
  hp = this.fb.control(null);
  engine = this.fb.control(null);


  model = this.fb.group({
    hp: this.hp,
    engine: this.engine,
    transmission: this.transmission,
    modification: this.modification,
    wheelDrive: this.wheelDrive
  });


  vtec: HTMLElement;
  configuration: ConfigurationModel = new ConfigurationModel();
  // transmission = 'Не выбран тип трансмиссии';
  kitArray = ['Люк', 'МКПП', 'АКПП', '1.8', '2.0', '4WD', 'Sir', 'Sir-T', 'Euro-R']
  engineArray = EngineEnumExt.getAllEngineNames();
  hpArray = EngineEnumExt.getAllHpEngines();
  transmissionArray = TransmissionEnumExt.getAllTransmissionNames();
  wheelDriveArray = WheelDriveEnumExt.getAllWheelDriveNames();
  modificationArray = ModificationEnumExt.getAllModificationNames();

  modificationPng = ModificationEnum.VTE;
  sub: Subscription;

  constructor(public appState: ApplicationStateService,
    public fb: FormBuilder) {
    // this.engineArray
    this.configuration.hp = 0;
    this.configuration.transmission = 'МКПП';
    this.configuration.wheelDrive = '4WD';
    this.configuration.modification = 'VTE';
    this.initForm();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.appState.getUserKit());
    if (this.transmission.value === null) { this.transmission.setValue('Не выбран тип трансмиссии'); }
    if (this.wheelDrive.value === null) { this.wheelDrive.setValue('Не выбран тип привода'); }
    if (this.modification.value === null) { this.modification.setValue(['Не выбрана модификация']); }
    if (this.hp.value === null) { this.hp.setValue(0); }
    console.log(this.model);
  //  this.sub = this.model.valueChanges.subscribe(() => { this.initForm(); });

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

  initForm() {
    const userKit = this.appState.getUserKit();
    this.transmission.setValue(userKit.transmission);
    this.modification.setValue(userKit.modification);
    this.hp.setValue(userKit.hp);
    this.engine.setValue(userKit.engine);
    this.wheelDrive.setValue(userKit.wheelDrive);
    this.modificationPng = ModificationEnumExt.getModificationEnum(userKit.modification);
    console.log(this.appState.getUserKit());
  }

  ngOnDestroy() {
    console.log(this.model);

  }

  addNewOption(control: string, kit: any) {
    console.log(kit);
    console.log(this.model.get('transmission2'));

    if (this.model.get(control).value === kit) {
      this.model.get(control).setValue('');
    } else {
      this.model.get(control).setValue(kit);
    }
    // if(!this.appState.getUserKit().includes(kit)) {
    //   this.appState.setUserKit(kit);
    // } else {}
  }

  checkHp(modification: string) {
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.VTE) {
      return this.model.controls.hp.value === 140;
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.VTS) {
      return this.model.controls.hp.value !== 140;
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.euroR) {
      return this.model.controls.hp.value === 220;
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.sir) {
      return this.model.controls.hp.value === 180
      && this.model.controls.transmission.value === 'АКПП';
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.sirT) {
      return this.model.controls.hp.value === 200
      && this.model.controls.transmission.value === 'МКПП';
    }
  }

  checkTransmission(transmission: string) {
    if (TransmissionEnumExt.getTransmissionEnum(transmission) !== TransmissionEnum.MT) {
      return this.model.controls.hp.value === 220;
    }
  }

  checkWheelDrive(wheelDrive: string) {
    if (WheelDriveEnumExt.getWheelDriveEnum(wheelDrive) === WheelDriveEnum.fullWD) {
      return this.model.controls.hp.value === 148;
    }
  }

  checkModification(modification: string) {
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.VTE) {
      return this.model.controls.engine.value === EngineEnumExt.getEngineName(EngineEnum.f18b)
              && this.model.controls.hp.value === 140
              && this.model.controls.wheelDrive.value === WheelDriveEnumExt.getWheelDriveName(WheelDriveEnum.frontWD);
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.VTS) {
      return this.model.controls.engine.value === EngineEnumExt.getEngineName(EngineEnum.f20b)
              && this.model.controls.hp.value !== 140
              && this.model.controls.hp.value !== 180
              && this.model.controls.hp.value !== 200
              && this.model.controls.hp.value !== 220;
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.euroR) {
      return this.model.controls.engine.value === EngineEnumExt.getEngineName(EngineEnum.h22a)
              && this.model.controls.hp.value === 220;
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.sir) {
      return this.model.controls.hp.value === 180
      && this.model.controls.transmission.value === 'АКПП';
    }
    if (ModificationEnumExt.getModificationEnum(modification) === ModificationEnum.sirT) {
      return this.model.controls.hp.value === 200
      && this.model.controls.transmission.value === 'МКПП';
    }
    return false;
  }

  includeKit(kit: string) {
    // return this.appState.getUserKit().includes(kit);
  }

  applyChanges() {
    console.log(this.model.value);
    //let engineEnum = EngineEnum[this.model.controls.hp.value];
    // console.log('aaaaaaa', a);

    this.appState.setUserKit(this.model.value);
  }


}
