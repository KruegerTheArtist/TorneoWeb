import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApplicationStateService {
    click: boolean;
    userKit = [];
    setClick(click: boolean) {
        this.click = click;
    }
    setUserKit(kit: string) {
        if (!this.userKit.includes(kit)) {
            this.userKit.push(kit)
        }
    }

    getUserKit() {
        return this.userKit;
    }
}