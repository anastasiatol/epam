import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './components/app.component/app.component.jsx';
import { appStore } from './store/index.js';

ReactDOM.render( 
    <Provider store = {appStore}>
        <App />
    </Provider>, 
    document.getElementById('ak-container')); 

