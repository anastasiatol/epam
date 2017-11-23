
const initialState = {
    movieCollection: []
}

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES_FROM_SERVER':
            return {
                movieCollection: action.payload
            }

        case 'ADD_MOVIE':
            return {
                
                movieCollection: action.payload

            }   

        default:
            return state;
    }
}