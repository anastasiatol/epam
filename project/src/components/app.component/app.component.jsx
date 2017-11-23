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

import { addMovieFormHide, hideSidebar, getInformationFromServer, addMovie } from './../../store/actions/index.jsx'
import "./app.component.less";
import { Sidebar } from '../../components/sidebar.component/sidebar.component.jsx';
import { Searchfield } from '../../components/search-field.component/search-field.component.jsx';
import { Mainmenu } from '../../components/main-menu.component/main-menu.component.jsx'
import AddMovieForm from '../../components/add-movie-form.component/add-movie-form.component.jsx';
import { Collection } from '../../components/collection.component/collection.component.jsx';
import { InfoPage } from '../../components/info-page.component/info-page.component.jsx';
import { getCollectionFromServer } from '../../services/getCollectionFromServer.jsx'

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
           // movieCollection: [],
            showCollection: [],
            genres: []
            };
        this.movieToFind = this.movieToFind.bind(this);
        this.props.getInformationFromServer ();
    }

    movieToFind(e) {
        let filteredMovies = this.movieCollectionFull.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({movieCollection: filteredMovies}); 
    }

    componentWillMount(){
    /*    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4ca6d3d62547a54fe12460c06f138516&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
        .then(response => {
            this.setState({movieCollection: response.data.results})
        });  */
        
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ca6d3d62547a54fe12460c06f138516&language=en-US&page=1')
        .then(response => {
            this.setState({showCollection: response.data.results});
        });
        
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US')
        .then(response => {
            this.setState({genres: response.data.genres});
            console.log(this.state.genres)
        })
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
                            <AddMovieForm genres = {this.state.genres}/>
                            <Switch>
                                <Route exact path = '/movies' render = {() => (<Collection collection = {this.props.movieCollection} pathWay = 'movie' />)}/>
                                <Route exact path = '/tvshows' render = {() => (<Collection collection = {this.state.showCollection} pathWay = 'tvshows'/>)}/>
                                <Route path='/movie/:id' render={(props)=> <InfoPage collection={this.props.movieCollection}  pathWay = 'movie' id = {props.match.params.id}/>}/>
                                <Route path='/tvshows/:id' render={(props)=> <InfoPage collection={this.state.showCollection} pathWay = 'tvshows' id = {props.match.params.id}/>}/>
                            </Switch> 
                        </div>
                    </div>    
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    const addMovieFormIsOpened = state.layoutState.addMovieFormIsOpened;
    const sidebarStateIsOpened = state.layoutState.sidebarStateIsOpened;
    var movieCollection = state.movieCollection.movieCollection
    
    return ({ addMovieFormIsOpened , sidebarStateIsOpened, movieCollection });
}

const mapDispatchToProps = (dispatch) => ({
    addMovieFormHide: () => dispatch(addMovieFormHide()),
    hideSidebar: () => dispatch(hideSidebar()),
    getInformationFromServer: () => dispatch(getInformationFromServer())

   
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

