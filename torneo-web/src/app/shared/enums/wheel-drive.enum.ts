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

    public static getAllWheelDriveNames(): string[] {
        return ['4WD', 'Передний привод', 'Задний привод']
    }
}