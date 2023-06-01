import { ChevroletBoltEv, NoPicture, TeslaModelY, TeslaModelX } from '../assets/img';

export const getCarImageByModel = (model = '') => {
    switch (model) {
        case 'Model X':
            return TeslaModelX;
        case 'Model Y':
            return TeslaModelY;
        case 'Bolt EV':
            return ChevroletBoltEv;
        default:
            return NoPicture;
    }
};