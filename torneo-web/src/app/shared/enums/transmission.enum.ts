export enum TransmissionEnum {
    AT = 0,
    MT = 1
}

export class TransmissionEnumExt {
    public static getTransmissionName(engine: TransmissionEnum): string {
        switch (engine) {
            case TransmissionEnum.AT:
                return 'АКПП';
            case TransmissionEnum.MT:
                return 'МКПП';
            default:
                return 'Неизвестно';
        }
    }

    public static getAllTransmissionNames(): string[] {
        return ['АКПП', 'МКПП']
    }
}