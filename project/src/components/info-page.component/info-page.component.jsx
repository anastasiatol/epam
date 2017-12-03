import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'; 
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'

import { 
    getSimilarMovieFromServer,
    getSimilarTVFromServer,
    changeHeadrStyle   
} from './../../store/actions/index.js'

import "./info-page.component.less"; 

import { Progressbar } from './../small-components/progressbar.component/progressbar.component.jsx'

class InfoPage extends Component {

    constructor(props) {  
        super(props);
        
        
        this.props.movieCollection.forEach(function(item) {
            if (+item.id === +this.props.id) {
                this.state= {currentEllement : item}
            }
        }, this);
        this.props.showCollection.forEach(function(item) {
            if (+item.id === +this.props.id) {
                this.state= {currentEllement : item}
            }
        }, this);

        if (this.state.currentEllement.type === 'movie'){
            this.props.getSimilarMovieFromServer(`https://api.themoviedb.org/3/movie/${this.state.currentEllement.id}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`)
        }

        if (this.state.currentEllement.type === 'tv'){
            this.props.getSimilarTVFromServer(`https://api.themoviedb.org/3/tv/${this.state.currentEllement.id}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`)
        }

    }

    changeCurrentElement(item){
        this.setState({currentEllement : item})
        if (item.type === 'movie'){
            this.props.getSimilarMovieFromServer(`https://api.themoviedb.org/3/movie/${item.id}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`)
        }

        if (item.type === 'tv'){
            this.props.getSimilarTVFromServer(`https://api.themoviedb.org/3/tv/${item.id}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`)

        }
    }

    componentWillMount(e) {
        this.props.changeHeadrStyle('infoPage')
    }

    render() {
        return (
            <div className = 'ak-maininformation_info ak-info'>
                <div className = 'ak-info_poster-overview' >   
                    <div className = 'ak-info_poster'
                        style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${this.state.currentEllement.poster_path})`}}>
                    </div>
                    <div className = 'ak-info_name-overview'>
                        <div className = 'ak-info_name'>
                            {this.state.currentEllement.title}
                        </div>
                        <div className = 'ak-info_overview'>
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            {this.state.currentEllement.overview}
                            
                        </div>
                    </div>
                </div> 
                <div className = 'ak-info_genre'>
                </div>
                <div className = 'ak-info_progess-scale-container'>
                    <Progressbar 
                        title = 'Popularity'
                        value = {this.state.currentEllement.popularity}
                        max = {200}
                    />
                    <Progressbar 
                        title = 'Vote average'
                        value = {this.state.currentEllement.vote_average}
                        max = {10}
                    />
                </div>
                <div className = 'ak-info_recommended'>
                    <div className = 'ak-info_recommended-text'>
                        We also recommended
                    </div>
                    <div className = 'ak-info_recommended-movies'>
                        {(this.props.pathWay === 'movie')? 
                            this.props.similarMovies
                                .map((item, index) => {
                                    return (
                                        <NavLink to = {`/${this.props.pathWay}/${item.id}`}
                                        key = {index} 
                                        id = {item.id}
                                        onClick = {()=>this.changeCurrentElement(item)}>
                                            <div className = 'ak-info_recommended-movie'
                                                key= {index}
                                                style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${item.poster_path})`}}
                                            />
                                        </NavLink>
                                    )}
                                ):
                                this.props.similarShows
                                .map((item, index) => {
                                    return (
                                        <NavLink to = {`/${this.props.pathWay}/${item.id}`}
                                        key = {index} 
                                        id = {item.id}
                                        onClick = {()=>this.changeCurrentElement(item)}>
                                            <div className = 'ak-info_recommended-movie'
                                                key= {index}
                                                style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${item.poster_path})`}}
                                            />
                                        </NavLink>
                                    )}
                                )
                            }
                        </div>
                </div>  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    var movieCollection = state.movieCollection.movieCollection;
    var showCollection = state.tvShowCollection.showCollection;
    var mylibrary = state.myLibraryCollection.myLibraryCollection;
    var similarMovies = state.movieCollection.similarMovies;
    var similarShows = state.tvShowCollection.similarShows

    return ({ 
        movieCollection, 
        showCollection,
        mylibrary,
        similarMovies,
        similarShows
    });
}

const mapDispatchToProps = (dispatch) => ({
    getSimilarMovieFromServer: (url) => dispatch(getSimilarMovieFromServer(url)),
    getSimilarTVFromServer: (url) => dispatch(getSimilarTVFromServer(url)),
    changeHeadrStyle: (e) => dispatch(changeHeadrStyle(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)