import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./app.less";
import { Sidebar } from './components/sidebar/sidebar.jsx';
import  { Searchfield } from './components/searchfield.jsx';
import { Mainmenu } from './components/mainmenu.jsx';
import { MovieCollectionField } from './components/moviecollectionfield/moviecollectionfield.jsx';
import { Movie } from './components/moviecollectionfield/movie.jsx';

function App(){
    return (
        <div className ='ak-container'>
            <Sidebar />
            <div className ='ak-maininformation ak-container_maininformation'>
                <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                    <Searchfield />
                    <Mainmenu />
                </div>
                <MovieCollectionField />
            </div>    
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('ak-container'));

