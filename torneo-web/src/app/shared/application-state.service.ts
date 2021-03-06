import { Injectable } from '@angular/core';
import { ConfigurationModel } from './models/configuration.model';

@Injectable({ providedIn: 'root' })
export class ApplicationStateService {
    click: boolean;
    userKit: ConfigurationModel = new ConfigurationModel();
    setClick(click: boolean) {
        this.click = click;
    }

    setUserKit(userKit: ConfigurationModel) {
        this.userKit = userKit;
    }

    setOptionsKit(options: string[]) {
        this.userKit.options = options;
    }

    getUserKit() {
        return this.userKit;
    }
}