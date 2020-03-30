export enum EngineEnum {
    f18b = 0,
    f20b = 1,
    h22a = 2
}

export class EngineEnumExt {
    public static getEngineName(engine: EngineEnum): string {
        switch (engine) {
            case EngineEnum.f18b:
                return 'F18B';
            case EngineEnum.f20b:
                return 'F20B';
            case EngineEnum.h22a:
                return 'H22A';
            default:
                return 'Неизвестно';
        }
    }

    public static getAllEngineNames(): string[] {
        return ['F18B', 'F20B', 'H22A']
    }
}