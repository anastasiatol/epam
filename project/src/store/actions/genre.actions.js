export function getGenreFromServer () {
    return {
        type: 'GET_GENRE_FROM_SERVER'
    };
}

export function addGenre (payload) {
    return {
        type: 'ADD_GENRE',
        payload
    };
}