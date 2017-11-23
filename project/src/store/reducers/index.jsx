import { combineReducers } from 'redux';
import { layoutStateReducer } from './layout-state.reducer.jsx';
import { movieCollectionReducer } from './movie-collection.reducer.jsx'


 
export const appReducers = combineReducers ({
    layoutState: layoutStateReducer,
    movieCollection: movieCollectionReducer
});