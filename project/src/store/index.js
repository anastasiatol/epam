import {createStore, applyMiddleware, compose} from 'redux';

import {appReducers} from './reducers/index.js';
import getMovie from './middleware/get-movie.middleware.js';
import getTVShow from './middleware/get-tvshow.middleware';
import getGenre from './middleware/get-genre.middleware';
import getSimilarMovie from './middleware/get-similar-movies.middleware';
import getSimilarTV from './middleware/get-similar-tv.middleware';

export const appStore = createStore(appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware (
        getMovie,
        getTVShow,
        getGenre,
        getSimilarMovie,
        getSimilarTV

    )
);