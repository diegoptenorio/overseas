import { ChevroletBoltEv, TeslaModelY, TeslaModelX } from '../assets/img';

export const getCarImageByModel = (model = '') => {
    switch (model) {
        case 'TeslaX':
            return TeslaModelX;
            break;
        case 'TeslaY':
            return TeslaModelY;
            break;
        case 'ChevroletBoltEv':
            return ChevroletBoltEv;
            break;
        default:
            break;
    }
};