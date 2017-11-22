import { combineReducers } from 'redux';
import { layoutStateReducer } from './layout-state.reducer.jsx';

 
export const appReducers = combineReducers ({
    layoutState: layoutStateReducer
});