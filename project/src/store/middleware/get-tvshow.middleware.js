import axios from 'axios';

const getTVShow = store => next => action => {

    if (action.type === 'GET_TVSHOW_FROM_SERVER') {

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ca6d3d62547a54fe12460c06f138516&language=en-US&page=1')
        .then((response) => {
            let showCollection = response.data.results;

            store.dispatch({
                type: 'TVSHOW_FROM_SERVER',
                payload: showCollection
            });
        });
    }
    return next(action);
};

export default getTVShow;
