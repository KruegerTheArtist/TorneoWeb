export enum ModificationEnum {
    VTE = 0,
    VTS = 1,
    sir = 2,
    sirT = 3,
    euroR = 4,
    LEV = 5
}

export class ModificationEnumExt {
    public static getModificationName(engine: ModificationEnum): string {
        switch (engine) {
            case ModificationEnum.VTE:
                return 'VTE';
            case ModificationEnum.VTS:
                return 'VTS';
            case ModificationEnum.sir:
                return 'Sir';
            case ModificationEnum.sirT:
                return 'Sir-T';
            case ModificationEnum.euroR:
                return 'Euro-R';
            case ModificationEnum.LEV:
                return 'LEV';
            default:
                return 'Неизвестно';
        }
    }

    public static getAllModificationNames(): string[] {
        return ['VTE', 'VTS', 'Sir', 'Sir-T', 'Euro-R', 'LEV']
    }
}