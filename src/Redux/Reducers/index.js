import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';
import { digimonReducer } from './digimonReducer';

export const Reducers = combineReducers({
    clickState: clickReducer,
    digimonState: digimonReducer
});