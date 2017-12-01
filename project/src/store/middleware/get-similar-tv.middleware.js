import axios from 'axios';
import { IdentityTVShow } from './../../services/getToIdentetyTVShows.servise';

const getSimilarTV = store => next => action => {

    if (action.type === 'GET_SIMILAR_TV_FROM_SERVER') {

        axios.get(action.payload)
        .then((response) => {
            let tvCollection = response.data.results;
            tvCollection = tvCollection.map((item) => {
                return new IdentityTVShow(item);
            });
            store.dispatch({
                type: 'SIMILAR_TV_FROM_SERVER',
                payload: tvCollection
            });
        });
    }
    return next(action);
};

export default getSimilarTV;