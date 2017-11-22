import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'

import "./info-page.component.less"; 

export class InfoPage extends Component {

    constructor(props) {  
        super(props);
        this.currentEllement = {};
        
    }
    
    componentWillMount() {
        this.props.collection.forEach(function(item) {
            if (item.id === +this.props.id) {
                this.currentEllement = item
            }
        }, this);

        
    }

    render() {
        console.log(this.props.id)
        return (
            <div className = 'ak-maininformation_info ak-info'>
                <div className = 'ak-info_poster-overview' >   
                    <div className = 'ak-info_poster'
                        style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${this.currentEllement.poster_path})`}}>
                    </div>
                    <div className = 'ak-info_name-overview'>
                        <div className = 'ak-info_name'>
                            {this.currentEllement.title}
                        </div>
                        <div className = 'ak-info_overview'>
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            {this.currentEllement.overview}
                            
                        </div>
                    </div>
                </div> 
                <div className = 'ak-info_genre'>
                </div>
                <div className = 'ak-info_progess-scale-container'>
                    <div className = 'ak-info_progess-scale-mini-container'>
                        Popularity
                        <progress className = 'ak-info_progress-scale ak-info_progress-scale__yellow' value = {this.props.collection[1].popularity} max={200}/>
                    </div>
                    <div className = 'ak-info_progess-scale-mini-container'>
                        Vote average
                        <progress className = 'ak-info_progress-scale ak-info_progress-scale__green' value = {this.currentEllement.vote_average} max={10}/>
                    </div>
                </div>
                <div className = 'ak-info_recommended ak-recommended'>
                    <div className = 'ak-recommended_text'>
                        We also recommended
                    </div>
                    <div className = 'ak-recommended_movies'>
                        {this.props.collection
                            .map((item, index) => {
                                return (
                                    <NavLink to = {`/${this.props.pathWay}/${item.id}`}
                                    key = {index}>
                                        <div className = 'ak-recommended_movie'
                                            key= {index}
                                            style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${item.poster_path})`}}
                                        />
                                    </NavLink>
                                )}
                            )}
                    </div>
                </div>  
            </div>
        );
    }
}