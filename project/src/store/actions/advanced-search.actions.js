export function getSavedSearch () {
    return {
        type: 'GET_SAVED_SEARCH'
    };
}

export function doAdvancedSearch (payload) {
    return {
        type: 'DO_ADVANCED_SEARCH',
        payload
    };
}

export function cancelSearch () {
    return {
        type: 'CANCEL_SEARCH'
    };
}