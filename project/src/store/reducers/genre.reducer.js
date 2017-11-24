
var initialState = {
    genre: []
};

export function genreReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_GENRE_FROM_SERVER':
            return {

                genre: action.payload


            };

        case 'ADD_GENRE':
            return {

                genre: action.payload

            };

        default:
            return state;
    }
}