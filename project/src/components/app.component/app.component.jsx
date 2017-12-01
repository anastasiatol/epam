import React, { Component } from "react";
import ReactDOM from "react-dom";
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
    hideAdvancedSearch,
    getInformationFromServer, 
    addMovie, 
    getTVshowsFromServer , 
    getGenreFromServer, 
    getMyLibrary,
    getSavedSearch, 
    addToMyLibrary,
    deleteFromMyLibrary,
    cancelSearch,
    doAdvancedSearch
} from './../../store/actions/index.js'
import "./app.component.less";
import { Sidebar } from '../../components/sidebar.component/sidebar.component.jsx';
import { CommonInput } from '../../components/small-components/common-input.component/common-input.component.jsx';
import { Mainmenu } from '../../components/main-menu.component/main-menu.component.jsx'
import AddMovieForm from '../../components/add-movie-form.component/add-movie-form.component.jsx';
import { Collection } from '../../components/collection.component/collection.component.jsx';
import InfoPage from '../../components/info-page.component/info-page.component.jsx';
import AdvancedSearch from './../advanced-search.component/advanced-search.component.jsx'
import { AboutMeInfoPage } from './../about-me-info-page.component/about-me-info-page.component.jsx'
import { Support } from './../support.component/support.component.jsx'

class App extends Component {
    constructor (props) {
        super (props);

        this.movieToFind = this.movieToFind.bind(this);
        this.itemIsInLibrary = this.itemIsInLibrary.bind(this);

        this.props.getInformationFromServer ();
        this.props.getTVshowsFromServer ();
        this.props.getGenreFromServer ();
        this.props.getMyLibrary ();
        this.props.getSavedSearch();
    }

    movieToFind(e) {
        let filteredMovies = this.props.movieCollection.filter((item) =>{
            return item.title.toLowerCase().indexOf(e.toLowerCase()) !== -1});
          
        this.setState ({movieCollection: filteredMovies}); 
    }
    
    itemIsInLibrary(e) {
        for (let i=0; i<this.props.mylibrary.length; i++) {
            if (e.id === this.props.mylibrary[i].id) return true;
        }
        return false; 
    }

    render() {
        return (
            <Router>
                <div className ='ak-container'>
                    <Sidebar sidebarStateIsOpened = {this.props.sidebarStateIsOpened} hideSidebar = {this.props.hideSidebar.bind(this)}/>
                    <div className = {this.props.sidebarStateIsOpened? 'ak-maininformation ak-container_maininformation' : 'ak-maininformation ak-container_maininformation ak-container_maininformation__nosidebar'}>
                        <div className ='ak-mainmenuline ak-maininformation_mainmenuline'> 
                            <div className = 'ak-searchfield ak-mainmenuline_searchfield'>
                                <CommonInput className = 'ak-searchfield_text'/>
                                <div className = 'ak-searchfield_icon'
                                    onClick = {this.props.hideAdvancedSearch}>
                                    find
                                </div>
                                <div className = 'ak-searchfield_icon'
                                    onClick = {this.props.cancelSearch}>
                                    cancel
                                </div>
                            </div>
                            <Mainmenu addMovieFormHide = {this.props.addMovieFormHide.bind(this)}/>
                        </div>  
                        <AdvancedSearch advancedSearchIsOpened = {this.props.advancedSearchIsOpened}/> 
                        <AddMovieForm /> 
                        <Switch>
                            <Route exact path = '/movies' 
                                render = {() => (<Collection 
                                    collection = {this.props.filteredMovies} 
                                    addToMyLibrary = {this.props.addToMyLibrary.bind(this)}
                                    deleteFromMyLibrary = {this.props.deleteFromMyLibrary.bind(this)}
                                    itemIsInLibrary = {this.itemIsInLibrary.bind(this)}    
                                    pathWay = 'movie' />)}
                            />
                            <Route exact path = '/tvshows' 
                                render = {() => (<Collection 
                                    collection = {this.props.showCollection} 
                                    addToMyLibrary = {this.props.addToMyLibrary.bind(this)}
                                    deleteFromMyLibrary = {this.props.deleteFromMyLibrary.bind(this)}
                                    itemIsInLibrary = {this.itemIsInLibrary.bind(this)} 
                                    pathWay = 'tvshows'/>)}
                            />
                            <Route exact path = '/mylibrary' 
                                render = {() => (<Collection 
                                    collection = {this.props.mylibrary}
                                    addToMyLibrary = {this.props.addToMyLibrary.bind(this)}
                                    deleteFromMyLibrary = {this.props.deleteFromMyLibrary.bind(this)}
                                    itemIsInLibrary = {this.itemIsInLibrary.bind(this)} 
                                    pathWay = 'mylibrary'/>)}
                                    />
                            <Route path='/movie/:id' render={(props)=> <InfoPage pathWay = 'movie' params = {props.match.params} id = {props.match.params.id}/>}/>
                            <Route path='/tvshows/:id' render={(props)=> <InfoPage pathWay = 'tvshows' id = {props.match.params.id}/>}/>
                            <Route path='/mylibrary/:id' render={(props)=> <InfoPage pathWay = 'mylibrary' id = {props.match.params.id}/>}/>
                            <Route path='/about' render={()=> <AboutMeInfoPage/>}/>
                            <Route path='/support' render={() => <Support/>}/>
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
    const advancedSearchIsOpened = state.layoutState.advancedSearchIsOpened;
    var movieCollection = state.movieCollection.movieCollection;
    var showCollection = state.tvShowCollection.showCollection;
    const genre = state.genre.genre;
    var mylibrary = state.myLibraryCollection.myLibraryCollection;
    var filteredMovies = state.movieCollection.filteredMovies;
    var advancedSearch = state.advancedSearch.advancedSearch
    
    return ({ addMovieFormIsOpened , 
        sidebarStateIsOpened, 
        advancedSearchIsOpened,
        movieCollection, 
        showCollection,
        genre, 
        mylibrary,
        filteredMovies,
        advancedSearch
    });
}

const mapDispatchToProps = (dispatch) => ({
    addMovieFormHide: () => dispatch(addMovieFormHide()),
    hideSidebar: () => dispatch(hideSidebar()),
    hideAdvancedSearch: ()=> dispatch(hideAdvancedSearch()), 
    getInformationFromServer: () => dispatch(getInformationFromServer()),
    getTVshowsFromServer: () => dispatch(getTVshowsFromServer()),
    getGenreFromServer: () => dispatch(getGenreFromServer()),
    getMyLibrary: () => dispatch(getMyLibrary()),
    addToMyLibrary: (item) => dispatch(addToMyLibrary(item)),
    deleteFromMyLibrary: (item) => dispatch(deleteFromMyLibrary(item)),
    getSavedSearch: () => dispatch(getSavedSearch()),
    cancelSearch: () => dispatch(cancelSearch()),
    doAdvancedSearch: (dataSearch) => dispatch(doAdvancedSearch(dataSearch))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

