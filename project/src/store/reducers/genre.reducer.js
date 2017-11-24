
var initialState = {
    genre: []
};

export function genreReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_GENRE':
            return {
                ...state,
                genre: action.payload


            };


        default:
            return state;
    }
}