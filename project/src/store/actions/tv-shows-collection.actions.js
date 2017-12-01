export function getTVshowsFromServer () {
    return {
        type: 'GET_TVSHOW_FROM_SERVER'
    };
}

export function addTVShow (payload) {
    return {
        type: 'ADD_TVSHOW',
        payload
    };
}

export function getSimilarTVFromServer (payload) {
    return {
        type : 'GET_SIMILAR_TV_FROM_SERVER',
        payload
    };
}