const initialState = {
    sidebarStateIsOpened: true,
    addMovieFormIsOpened: false,
    advancedSearchIsOpened: false,
    commonSearchIsOpened: true,
    addMovieBtnIsOpened: true

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
                advancedSearchIsOpened: false
            };
            case 'CLOSE_ADVANCED_SEARCH':
            return{
                ...state,
                advancedSearchIsOpened: false
            };
            case 'CANCEL_SEARCH':
            return{
                ...state,
                advancedSearchIsOpened: false
            };
            case 'CHANGE_HEADER_STYLE':
                if (action.payload === 'app') {
                    return{
                        ...state,
                        commonSearchIsOpened: true,
                        addMovieBtnIsOpened: true
                    };
                }
                if (action.payload === 'movie') {
                    return{
                        ...state,
                        commonSearchIsOpened: true,
                        addMovieBtnIsOpened: true

                    };
                }
                if (action.payload === 'tvshows') {
                    return{
                        ...state,
                        commonSearchIsOpened: true,
                        addMovieBtnIsOpened: false,
                        addMovieFormIsOpened: false
                    };
                }
                if (action.payload === 'mylibrary') {
                    return{
                        ...state,
                        commonSearchIsOpened: true,
                        addMovieBtnIsOpened: false,
                        addMovieFormIsOpened: false
                    };
                }
                if (action.payload === 'info') {
                    return{
                        ...state,
                        commonSearchIsOpened: false,
                        addMovieBtnIsOpened: false,
                        addMovieFormIsOpened: false
                    };
                }
                if (action.payload === 'aboutme') {
                    return{
                        ...state,
                        commonSearchIsOpened: false,
                        addMovieBtnIsOpened: false,
                        addMovieFormIsOpened: false
                    };
                }
                if (action.payload === 'support') {
                    return{
                        ...state,
                        commonSearchIsOpened: false,
                        addMovieBtnIsOpened: false,
                        addMovieFormIsOpened: false
                    };
                }
            return state;
        default:
            return state;
    }
}