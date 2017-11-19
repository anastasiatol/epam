const initialState = {
    state: 'INITIAL',
    isOpened: false
}

export function addMovieFormReducer (state = initialState, action) {
    switch (action.type) {
        case "CHANGE_ADD_MOVIE_FORM_STATE":
            return{
                state,
                isOpened : !state.isOpened
            }
        default:
            return state;
    }
}