
var initialState = {
    movieCollection: [],
    filteredMovies: []
};

export function movieCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_FROM_SERVER':
            return {
                movieCollection: action.payload,
                filteredMovies: action.payload
            };

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
            }; //filtered movies ????

        case 'DO_ADVANCED_SEARCH':
            let filteredMoviesArr = state.movieCollection.filter((item) =>{
                return item.title.toLowerCase().indexOf(action.payload.title.toLowerCase()) !== -1;
            });
            filteredMoviesArr = filteredMoviesArr.filter((item) =>{
                return item.overview.toLowerCase().indexOf(action.payload.overview.toLowerCase()) !== -1;
            });

            var isGenre = function (genreSearch, genreFilm) {
                for (let i=0; i<genreSearch.length; i++) {
                    for (let j=0; j<genreFilm.length; j++) {
                        if (genreSearch[i] === genreFilm[j]) {
                            return true;
                        }
                    }
                }
                return false;
            };

            if (action.payload.genre_ids.length > 0 ) {
                for (let i=0; i<filteredMoviesArr.length; i++) {
                    if (!isGenre(action.payload.genre_ids, filteredMoviesArr[i].genre_ids)) {
                        filteredMoviesArr.splice(i,1);
                        i = i-1;
                    }
                }
            }

            filteredMoviesArr = filteredMoviesArr.filter((item) => item.adult === action.payload.adult);
            return {
                ...state,
                filteredMovies: filteredMoviesArr
            };

        default:
            return state;
    }
}