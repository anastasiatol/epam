export function getMyLibrary () {
    return {
        type: 'GET_MY_LIBRARY'
    };
}

export function addToMyLibrary (payload) {
    return {
        type: 'ADD_TO_MY_LIBRARY',
        payload
    };
}

export function deleteFromMyLibrary (payload) {
    return {
        type : 'DELETE_FROM_MY_LIBRARY',
        payload
    };
}