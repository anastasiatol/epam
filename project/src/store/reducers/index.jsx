import { combineReducers } from 'redux';
import { addMovieFormReducer } from './add-movie-form.reducer.jsx';

export const appReducers = combineReducers ({
    addMovieForm: addMovieFormReducer
});