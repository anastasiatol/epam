import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';
import { advancedSearchServise } from './../../services/advanced-search.servise';
import { advancedSearchInitialServise } from './../../services/advanced-search-initial.servise';

var initialState = {
    movieCollection: [],
    filteredMovies: [],
    similarMovies: []
};

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FROM_SERVER':
            var filteredMoviesArray = advancedSearchServise (action.payload, advancedSearchInitialServise());
            return {
                ...state,
                movieCollection: action.payload,
                filteredMovies: filteredMoviesArray
            };

        case 'SIMILAR_MOVIES_FROM_SERVER' :
            return {
                ...state,
                similarMovies: action.payload
            };

        case 'ADD_MY_MOVIE':
            saveInLocalStorage (action.payload, 'movies');
            var filteredItem = [];
            filteredItem.push(action.payload);
            filteredItem = advancedSearchServise (filteredItem, advancedSearchInitialServise());
            return {
                ...state,
                movieCollection: [...state.movieCollection, action.payload],
                filteredMylibrary: [...state.filteredMylibrary, filteredItem[0]]
            };

        case 'DO_ADVANCED_SEARCH':
            let filteredMoviesArr = advancedSearchServise (state.movieCollection, action.payload);
            return {
                ...state,
                filteredMovies: filteredMoviesArr
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