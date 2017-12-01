import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';
import { advancedSearchServise } from './../../services/advanced-search.servise';

var initialState = {
    movieCollection: [],
    filteredMovies: [],
    similarMovies: []
};

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FROM_SERVER':
            return {
                ...state,
                movieCollection: action.payload,
                filteredMovies: action.payload
            };

        case 'SIMILAR_MOVIES_FROM_SERVER' :
            return {
                ...state,
                similarMovies: action.payload
            };

        case 'ADD_MY_MOVIE':
            saveInLocalStorage (action.payload, 'movies');
            return {
                ...state,
                movieCollection: [...state.movieCollection, action.payload]
            }; //filtered movies ????

        case 'DO_ADVANCED_SEARCH':
            let filteredMovies = advancedSearchServise (state.movieCollection, action.payload);
            return {
                ...state,
                filteredMovies: filteredMovies
            };

        case 'CANCEL_SEARCH':
            return {
                ...state,
                filteredMovies: state.movieCollection
            };

        default:
            return state;
    }
}