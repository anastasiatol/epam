export function getInformationFromServer () {
    return {
        type: 'GET_MOVIES_FROM_SERVER'
    };
}

export function addMovie (payload) {
    return {
        type: 'ADD_MOVIE',
        payload
    };
}

export function addMyMovie (payload) {
    return {
        type : 'ADD_MY_MOVIE',
        payload
    };
}

export function getSimilarMovieFromServer (payload) {
    return {
        type : 'GET_SIMILAR_MOVIES_FROM_SERVER',
        payload
    };
}