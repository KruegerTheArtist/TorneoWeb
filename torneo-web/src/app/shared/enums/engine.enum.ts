import { WheelDriveEnum } from "./wheel-drive.enum";

export enum EngineEnum {
    f18b = 0,
    f20bSOHC = 1,
    f20bDOHC = 2,
    h22a = 3,
    h23a = 4
}

export class EngineEnumExt {
    public static getEngineName(engine: EngineEnum): string {
        switch (engine) {
            case EngineEnum.f18b:
                return 'f18b';
            case EngineEnum.f20bSOHC:
                return 'f20bSOHC';
            case EngineEnum.f20bDOHC:
                return 'f20bDOHC';
            case EngineEnum.h22a:
                return 'h22a';
            case EngineEnum.h23a:
                return 'h23a';
            default:
                return 'Неизвестно';
        }
    }

    public static getAllEngineNames(): string[] {
        return ['f18b', 'f20bSOHC', 'f20bDOHC', 'h22a', 'h23a'];
    }

    public static getAllHpEngines(): number[] {
        return [140, 148, 150, 180, 200, 220];
    }

    public static getHpByEngine(engine: EngineEnum, whellDrive?: WheelDriveEnum): number {
        switch (engine) {
            case EngineEnum.f18b:
                return 140;
            case (EngineEnum.f18b && whellDrive):
                return 148;
            case EngineEnum.f20bSOHC:
                return 150;
            case EngineEnum.f20bDOHC:
                return 180;
            case EngineEnum.h23a:
                return 200;
            case EngineEnum.h22a:
                return 220;
            default:
                return 0;
        }
    }
}
