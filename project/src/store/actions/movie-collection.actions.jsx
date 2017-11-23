export function getInformationFromServer () {
    return {
        type: "GET_MOVIES_FROM_SERVER"
    }
}

export function addMovie (payload) {
    return {
        type: "ADD_MOVIE",
        payload
    }
}