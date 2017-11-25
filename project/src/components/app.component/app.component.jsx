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

import { 
    addMovieFormHide, 
    hideSidebar, 
    getInformationFromServer, 
    addMovie, 
    getTVshowsFromServer , 
    getGenreFromServer, 
    getMyLibrary, 
    addToMyLibrary,
    deleteFromMyLibrary
} from './../../store/actions/index.js'
import "./app.component.less";
import { Sidebar } from '../../components/sidebar.component/sidebar.component.jsx';
import { Searchfield } from '../../components/search-field.component/search-field.component.jsx';
import { Mainmenu } from '../../components/main-menu.component/main-menu.component.jsx'
import AddMovieForm from '../../components/add-movie-form.component/add-movie-form.component.jsx';
import { Collection } from '../../components/collection.component/collection.component.jsx';
import { InfoPage } from '../../components/info-page.component/info-page.component.jsx';


class App extends Component {
    constructor (props) {
        super (props);

        this.movieToFind = this.movieToFind.bind(this); 
        this.props.getInformationFromServer ();
        this.props.getTVshowsFromServer ();
        this.props.getGenreFromServer ();
        this.props.getMyLibrary ();
    }

    movieToFind(e) {
        let filteredMovies = this.props.movieCollection.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({movieCollection: filteredMovies}); 
    }
    
    render() {
        return (
            <Router>
                <div className ='ak-container'>
                    <Sidebar sidebarStateIsOpened = {this.props.sidebarStateIsOpened} hideSidebar = {this.props.hideSidebar.bind(this)}/>
                    <div className ='ak-maininformation ak-container_maininformation'>
                        <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                            <Searchfield movieToFind = {this.movieToFind}/>
                            <Mainmenu addMovieFormHide = {this.props.addMovieFormHide.bind(this)}/>
                            <AddMovieForm />
                        </div>    
                        <Switch>
                            <Route exact path = '/movies' render = {() => (<Collection collection = {this.props.movieCollection} addToMyLibrary = {this.props.addToMyLibrary.bind(this)} pathWay = 'movie' />)}/>
                            <Route exact path = '/tvshows' render = {() => (<Collection collection = {this.props.showCollection} addToMyLibrary = {this.props.addToMyLibrary.bind(this)} pathWay = 'tvshows'/>)}/>
                            <Route exact path = '/mylibrary' render = {() => (<Collection collection = {this.props.mylibrary} pathWay = 'mylibrary'/>)}/>
                            <Route path='/movie/:id' render={(props)=> <InfoPage collection={this.props.movieCollection}  pathWay = 'movie' id = {props.match.params.id}/>}/>
                            <Route path='/tvshows/:id' render={(props)=> <InfoPage collection={this.props.showCollection} pathWay = 'tvshows' id = {props.match.params.id}/>}/>
                        </Switch> 
                    </div>    
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    const addMovieFormIsOpened = state.layoutState.addMovieFormIsOpened;
    const sidebarStateIsOpened = state.layoutState.sidebarStateIsOpened;
    var movieCollection = state.movieCollection.movieCollection;
    var showCollection = state.tvShowCollection.showCollection;
    const genre = state.genre.genre;
    var mylibrary = state.myLibraryCollection.myLibraryCollection;
    
    return ({ addMovieFormIsOpened , sidebarStateIsOpened, movieCollection, showCollection, genre, mylibrary});
}

const mapDispatchToProps = (dispatch) => ({
    addMovieFormHide: () => dispatch(addMovieFormHide()),
    hideSidebar: () => dispatch(hideSidebar()),
    getInformationFromServer: () => dispatch(getInformationFromServer()),
    getTVshowsFromServer: () => dispatch(getTVshowsFromServer()),
    getGenreFromServer: () => dispatch(getGenreFromServer()),
    getMyLibrary: () => dispatch(getMyLibrary()),
    addToMyLibrary: (item) => dispatch(addToMyLibrary(item)),
    deleteFromMyLibrary: (item) => dispatch(deleteFromMyLibrary(item))
   
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

