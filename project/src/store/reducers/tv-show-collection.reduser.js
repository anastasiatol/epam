import { advancedSearchServise } from './../../services/advanced-search.servise';
import { advancedSearchInitialServise } from './../../services/advanced-search-initial.servise';

var initialState = {
    showCollection: [],
    filteredShows: [],
    similarShows: []
};

export function tvShowCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'TVSHOW_FROM_SERVER':
        var filteredShowsArray = advancedSearchServise (action.payload, advancedSearchInitialServise());
            return {
                ...state,
                showCollection: action.payload,
                filteredShows: filteredShowsArray
            };

        case 'SIMILAR_TV_FROM_SERVER' :
            return {
                ...state,
                similarShows: action.payload
            };

        case 'ADD_TVSHOW':
            return {
                ...state,
                showCollection: [...state.showCollection, action.payload]
            };

        case 'DO_ADVANCED_SEARCH':
            let filteredShows = advancedSearchServise (state.showCollection, action.payload);
            return {
                ...state,
                filteredShows: filteredShows
            };

        case 'CANCEL_SEARCH':
            return {
                ...state,
                filteredShows: state.showCollection
            };

        default:
            return state;
    }
}