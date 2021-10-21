import { DIGIMON_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    digimons: []
};

export const digimonReducer = (state = initialState, action) => {

    switch (action.type) {
        case DIGIMON_UPDATE_VALUE:
            return {
                ...state,
                digimons: action.digimons
            };
        default:
            return state;
    }

};