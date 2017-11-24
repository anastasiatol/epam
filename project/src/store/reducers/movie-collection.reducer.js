
var initialState = {
    movieCollection: []
};

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FROM_SERVER':
            return {
                ...state,
                movieCollection: action.payload
            };

        case 'ADD_MOVIE':
            return {
                ...state,
                movieCollection: [...state.movieCollection, action.payload]
            };

        default:
            return state;
    }
}