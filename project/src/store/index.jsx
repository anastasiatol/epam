import {createStore, applyMiddleware, compose} from 'redux';

import {appReducers} from './reducers/index.jsx';

export const appStore = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());