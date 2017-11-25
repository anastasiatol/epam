
var initialState = {
    movieCollection: []
};

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FROM_SERVER':
            return {
                ...state,
                movieCollection: action.payload
            };

    /*    case 'ADD_MOVIE':
            return {
                ...state,
                movieCollection: [...state.movieCollection, action.payload]
            };*/

        case 'ADD_MY_MOVIE':
            let localStorageMyMoviesSTR = localStorage.getItem('movies');
            if (!localStorageMyMoviesSTR) {
                let arrMyMovies = [];
                arrMyMovies.push(action.payload);
                let arrMyMoviesSTR = JSON.stringify(arrMyMovies);
                localStorage.setItem('movies', arrMyMoviesSTR);
            } else {
                let localStorageMyMovies = JSON.parse(localStorageMyMoviesSTR);
                localStorageMyMovies.push(action.payload);
                let arrMyMoviesSTR = JSON.stringify(localStorageMyMovies);
                localStorage.removeItem('movies');
                localStorage.setItem('movies', arrMyMoviesSTR);
            }
            return {
                ...state,
                movieCollection: [...state.movieCollection, action.payload]
            };

        default:
            return state;
    }
}