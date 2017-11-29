const initialState = {
    sidebarStateIsOpened: true,
    addMovieFormIsOpened: false,
    advancedSearchIsOpened: false
};

export function layoutStateReducer (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SIDEBAR_STATE':
            return{
                ...state,
                sidebarStateIsOpened : !state.sidebarStateIsOpened
            };
            case 'CHANGE_ADD_MOVIE_FORM_STATE':
            return{
                ...state,
                addMovieFormIsOpened : !state.addMovieFormIsOpened
            };
            case 'CHANGE_ADVANCED_SEARCH_STATE':
            return{
                ...state,
                advancedSearchIsOpened: !state.advancedSearchIsOpened
            };
            case 'DO_ADVANCED_SEARCH':
            return{
                ...state,
                advancedSearchIsOpened: !state.advancedSearchIsOpened
            };

        default:
            return state;
    }
}