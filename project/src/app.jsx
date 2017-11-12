import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./app.less";
import { Sidebar } from './components/sidebar.jsx';
import  { Searchfield } from './components/searchfield.jsx';
import { Mainmenu } from './components/mainmenu.jsx';
import { AddMovieForm} from './components/addmovieform/addmovieform.jsx';

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
        this.state = {
            moviecollection: this.moviecollectionfull,
            addMovieIsOpen : false
        };
        this.movietofind = this.movietofind.bind(this);
        this.addMovieOpen = this.addMovieOpen.bind(this);
    }

    movietofind(e) {
        let filteredMovies = this.moviecollectionfull.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({moviecollection: filteredMovies}); 
    }

    addMovieOpen() {
        if (this.state.addMovieIsOpen) {
            this.setState({addMovieIsOpen : false});
        } else {
            this.setState({addMovieIsOpen : true});
        }
    }


    
    render() {
        return (
            <div className ='ak-container'>
                <Sidebar />
                <div className ='ak-maininformation ak-container_maininformation'>
                    <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                        <Searchfield movietofind = {this.movietofind}/>
                        <Mainmenu addMovieOpen = {this.addMovieOpen}/>
                        <AddMovieForm addMovieIsOpen = {this.state.addMovieIsOpen}/>
                        <div className = 'ak-moviecollection ak-maininformation_moviecollection'>    
                            {this.state.moviecollection
                                .map((item, index) => {
                                    return (
                                        <div className = {'ak-moviecollection_movie ak-moviecollection_movie__'+item.id}
                                            key = {index}>
                                        </div>
                                    )
                                })
                            }
                        </div> 
                    </div>
                    
                </div>    
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('ak-container'));

