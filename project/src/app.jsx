import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./app.less";
import { Sidebar } from './components/sidebar/sidebar.jsx';
import  { Searchfield } from './components/searchfield.jsx';
import { Mainmenu } from './components/mainmenu.jsx';
import { MovieCollectionField } from './components/moviecollectionfield/moviecollectionfield.jsx';


var getMoviecollection = function (source) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', source, false);
        xhr.send();
        return (xhr.responseText);
    } 

class App extends Component {
    constructor (props) {
        super (props);
        let moviecollectionjson = getMoviecollection('../src/data.json')
        this.moviecollectionfull = JSON.parse(moviecollectionjson);
        this.state = {moviecollection: this.moviecollectionfull};
        this.movietofind = this.movietofind.bind(this);
    }

    movietofind(e) {
        let filteredMovies = this.moviecollectionfull.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({moviecollection: filteredMovies}); 
    }
    
    render() {
        return (
            <div className ='ak-container'>
                <Sidebar />
                <div className ='ak-maininformation ak-container_maininformation'>
                    <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                        <Searchfield movietofind = {this.movietofind}/>
                        <Mainmenu />
                    </div>
                    <MovieCollectionField moviecollection = {this.state.moviecollection}/>
                </div>    
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('ak-container'));

