import axios from 'axios';
import { IdentityMovie } from './../../services/getToIdentityMovies.servise';

const getSimilarMovie = store => next => action => {

    if (action.type === 'GET_SIMILAR_MOVIES_FROM_SERVER') {

        axios.get(action.payload)
        .then((response) => {
            let movieCollection = response.data.results;
            movieCollection = movieCollection.map((item) => {
                return new IdentityMovie(item);
            });
            store.dispatch({
                type: 'SIMILAR_MOVIES_FROM_SERVER',
                payload: movieCollection
            });
        });
    }
    return next(action);
};

export default getSimilarMovie;