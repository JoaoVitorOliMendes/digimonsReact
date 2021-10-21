
import { createStore } from 'redux';
import { Reducers } from './Reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


export const Store = createStore(Reducers, composeWithDevTools(
));

Store.subscribe(() => {
  console.log('store foi modificada', Store.getState())
})