import { combineReducers } from 'redux';
import { layoutStateReducer } from './layout-state.reducer.js';
import { movieCollectionReducer } from './movie-collection.reducer.js';
import { tvShowCollectionReducer } from './tv-show-collection.reduser.js';
import { genreReducer } from './genre.reducer.js';
import { myLibraryCollectionReducer } from './my-library-collection.reducer';
import { advancedSearchReducer } from './advanced-search.reduser';


export const appReducers = combineReducers ({
    advancedSearch: advancedSearchReducer,
    layoutState: layoutStateReducer,
    movieCollection: movieCollectionReducer,
    tvShowCollection: tvShowCollectionReducer,
    genre: genreReducer,
    myLibraryCollection: myLibraryCollectionReducer

});