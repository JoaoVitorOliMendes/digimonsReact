import { CLICK_UPDATE_VALUE } from './actionTypes';
import { DIGIMON_UPDATE_VALUE } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});

export const digimonUpdated = value => ({
    type: DIGIMON_UPDATE_VALUE,
    digimons: value
})