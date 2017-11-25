import axios from 'axios';

const getMovie = store => next => action => {

    if (action.type === 'GET_MOVIES_FROM_SERVER') {

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4ca6d3d62547a54fe12460c06f138516&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
        .then((response) => {
            let movieCollection = response.data.results;
            let localStorageMyMoviesSTR = localStorage.getItem('movies');
            if (localStorageMyMoviesSTR) {
                var localStorageMyMovies = JSON.parse(localStorageMyMoviesSTR);
                movieCollection = movieCollection.concat(localStorageMyMovies);
            }

            store.dispatch({
                type: 'MOVIES_FROM_SERVER',
                payload: movieCollection
            });
        });
    }
    return next(action);
};

export default getMovie;
