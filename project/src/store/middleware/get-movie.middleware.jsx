import axios from 'axios';

const getMovie = store => next => action => {
    console.log('шлем запрос')
    if (action.type === 'GET_MOVIES_FROM_SERVER') {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4ca6d3d62547a54fe12460c06f138516&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
        .then((response) => {
            let movieCollection = response.data.results;
        
            store.dispatch({
                type: 'ADD_MOVIE',
                payload: movieCollection
            })
        });
    }
    return next(action);
}

export default getMovie;
