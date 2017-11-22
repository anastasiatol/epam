export function addMovieFormHide (payload) {
    return {
        type: "CHANGE_ADD_MOVIE_FORM_STATE",
        payload
    }
}

export function  hideSidebar (payload) {
    return {
        type: "CHANGE_SIDEBAR_STATE",
        payload
    }
}