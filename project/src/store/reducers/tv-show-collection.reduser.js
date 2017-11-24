
var initialState = {
    showCollection: []
};

export function tvShowCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_TVSHOW_FROM_SERVER':
            return {
                ...state,
                showCollection: action.payload


            };

        case 'ADD_TVSHOW':
            return {
                ...state,
                showCollection: [...state.showCollection, action.payload]

            };

        default:
            return state;
    }
}