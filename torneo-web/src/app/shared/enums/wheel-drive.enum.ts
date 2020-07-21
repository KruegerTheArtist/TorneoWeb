export enum WheelDriveEnum {
    fullWD = 0,
    rearWD = 1,
    frontWD = 2
}

export class WheelDriveEnumExt {
    public static getWheelDriveName(engine: WheelDriveEnum): string {
        switch (engine) {
            case WheelDriveEnum.fullWD:
                return '4WD';
            case WheelDriveEnum.frontWD:
                return 'Передний привод';
            case WheelDriveEnum.rearWD:
                return 'Задний привод';
            default:
                return 'Неизвестно';
        }
    }

    public static getWheelDriveEnum(engine: string): WheelDriveEnum {
        switch (engine) {
            case '4WD':
                return WheelDriveEnum.fullWD;
            case 'Передний привод':
                return WheelDriveEnum.frontWD;
            case 'Задний привод':
                return WheelDriveEnum.rearWD;
        }
    }

    public static getAllWheelDriveNames(): string[] {
        return ['4WD', 'Передний привод', 'Задний привод']
    }
}