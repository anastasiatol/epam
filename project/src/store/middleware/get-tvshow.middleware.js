import axios from 'axios';
import { IdentityTVShow } from './../../services/getToIdentetyTVShows.servise';

const getTVShow = store => next => action => {

    if (action.type === 'GET_TVSHOW_FROM_SERVER') {

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ca6d3d62547a54fe12460c06f138516&language=en-US&page=1')
        .then((response) => {
            let showCollection = response.data.results;
            showCollection = showCollection.map((item) => {
                return new IdentityTVShow(item);
            });
            store.dispatch({
                type: 'TVSHOW_FROM_SERVER',
                payload: showCollection
            });
        });
    }
    return next(action);
};

export default getTVShow;
