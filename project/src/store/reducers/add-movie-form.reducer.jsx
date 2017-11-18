const initialState = {
    isOpened: false
}

export function addMovieFormReducer (state = initialState, action) {
    switch (action.type) {
        case "CHANGE_ADD_MOVIE_FORM_STATE":
            return{
                state,
                isOpened : !isOpened
            }
        default:
            return state;
    }
}