import { combineReducers } from 'redux';
import { layoutStateReducer } from './layout-state.reducer.js';
import { movieCollectionReducer } from './movie-collection.reducer.js';
import { tvShowCollectionReducer } from './tv-show-collection.reduser.js';
import { genreReducer } from './genre.reducer.js';
import { myLibraryCollectionReducer } from './my-library-collection.reducer';



export const appReducers = combineReducers ({
    layoutState: layoutStateReducer,
    movieCollection: movieCollectionReducer,
    tvShowCollection: tvShowCollectionReducer,
    genre: genreReducer,
    myLibraryCollection: myLibraryCollectionReducer
});