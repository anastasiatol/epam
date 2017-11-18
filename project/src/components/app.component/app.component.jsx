import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom';
import { connect } from 'react-redux'; 

import { addMovie } from './../../store/actions/add-movie-form.actions.jsx'
import "./app.component.less";
import { Sidebar } from '../../components/sidebar.component/sidebar.component.jsx';
import  { Searchfield } from '../../components/search-field.component/search-field.component.jsx';
import Mainmenu from '../../components/main-menu.component/main-menu.component.jsx'
import { AddMovieForm} from '../../components/add-movie-form.component/add-movie-form.component.jsx';
import { Collection } from '../../components/collection.component/collection.component.jsx';
import { Info } from '../../components/movie-info.component/movie-info.component.jsx'

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            movieCollection: [],
            showCollection: [],
   //         addMovieIsOpen : false
        };
        this.movieToFind = this.movieToFind.bind(this);
    /*    this.addMovieOpen = this.addMovieOpen.bind(this);*/
    }

    movieToFind(e) {
        let filteredMovies = this.movieCollectionFull.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({movieCollection: filteredMovies}); 
    }


    /*addMovieOpen() {
        if (this.state.addMovieIsOpen) {
            this.setState({addMovieIsOpen : false});
        } else {
            this.setState({addMovieIsOpen : true});
        }
    }*/

    componentWillMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4ca6d3d62547a54fe12460c06f138516&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
        .then(response => {
            this.setState({movieCollection: response.data.results})
        });
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ca6d3d62547a54fe12460c06f138516&language=en-US&page=1')
        .then(response => {
            this.setState({showCollection: response.data.results})
        })
    }
    
    render() {
        console.log (this.props)
        return (
            <Router>
                <div className ='ak-container'>
                    <Sidebar />
                    <div className ='ak-maininformation ak-container_maininformation'>
                        <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                            <Searchfield movieToFind = {this.movieToFind}/>
                            <Mainmenu />
                            <AddMovieForm isOpenedAddMovieForm = {this.props.isOpenedAddMovieForm}/>
                            <Switch>
                                <Route exact path = '/movies' render = {() => (<Collection collection = {this.state.movieCollection} pathWay = 'movie' />)}/>
                                <Route exact path = '/tvshows' render = {() => (<Collection collection = {this.state.showCollection} pathWay = 'tvshows'/>)}/>
                                <Route path='/movie/:id' component={Info}/>
                                <Route path='/tvshows/:id' component={Info}/>
                            </Switch> 
                        </div>
                    </div>    
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    const isOpened = state.addMovieForm.isOpened;
    
    return ({ isOpened });
}

const mapDispatchToProps = (dispatch) => ({
    addMovie: () => dispatch(addMovie())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)

