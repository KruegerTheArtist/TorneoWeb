export enum EngineEnum {
    f18b = 0,
    f20b = 1,
    h22a = 2
}

export class EngineEnumExt {
    public static getEngineName(engine: EngineEnum): string {
        switch (engine) {
            case EngineEnum.f18b:
                return 'f18b';
            case EngineEnum.f20b:
                return 'f20b';
            case EngineEnum.h22a:
                return 'h22a';
            default:
                return 'Неизвестно';
        }
    }

    public static getAllEngineNames(): string[] {
        return ['f18b', 'f20b', 'h22a'];
    }

    public static getAllHpEngines(): number[] {
        return [140, 148, 150, 180, 200, 220];
    }

    public static getHpByEngine(engine: EngineEnum): number {
        switch (engine) {
            case EngineEnum.f18b:
                return 140;
            case EngineEnum.f20b:
                return 150;
            case EngineEnum.h22a:
                return 220;
            default:
                return 0;
        }
    }
}
