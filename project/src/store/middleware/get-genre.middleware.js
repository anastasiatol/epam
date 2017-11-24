import axios from 'axios';

const getGenre = store => next => action => {

    if (action.type === 'GET_GENRE_FROM_SERVER') {
        console.log('get genre');
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US')
        .then((response) => {
            let genre = response.data.genres;

            store.dispatch({
                type: 'ADD_GENRE',
                payload: genre
            });
        });
    }
    return next(action);
};

export default getGenre;
