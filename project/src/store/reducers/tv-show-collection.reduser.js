
var initialState = {
    showCollection: [],
    filteredShows: [],
    similarShows: []
};

export function tvShowCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'TVSHOW_FROM_SERVER':
            return {
                ...state,
                showCollection: action.payload
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