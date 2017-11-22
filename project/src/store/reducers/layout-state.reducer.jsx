const initialState = {
    sidebarStateIsOpened: true,
    addMovieFormIsOpened: false
}

export function layoutStateReducer (state = initialState, action) {
    switch (action.type) {
        case "CHANGE_SIDEBAR_STATE":
            return{
                sidebarStateIsOpened : !state.sidebarStateIsOpened,
                addMovieFormIsOpened : state.addMovieFormIsOpened
            };
            case "CHANGE_ADD_MOVIE_FORM_STATE":
            return{
                sidebarStateIsOpened : state.sidebarStateIsOpened,
                addMovieFormIsOpened : !state.addMovieFormIsOpened
            };

        default:
            return state;
    }
}