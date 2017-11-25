import React, { Component } from 'react';
import "./item-collection.component.less";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'

export class ItemCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            smallInfo : false
        }
        
    }

    openSmallInfo() {
        this.setState ({smallInfo : true})
    }

    closeSmallInfo() {
        this.setState ({smallInfo : false})
    }

    render() {
        return (
            <NavLink to = {`/${this.props.pathWay}/${this.props.item.id}`}>
            
                <div className = 'ak-moviecollection_movie ak-movie'
                    style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${this.props.item.poster_path})`}}>
                    <div className = 'ak-movie_mask'>
                        <div className = 'ak-movie_button-container'>
                            <div className = 'ak-movie_button ak-movie_button__info'
                                onMouseOver = {() => this.openSmallInfo()}
                                onMouseOut = {() => this.closeSmallInfo()}
                                >
                                i
                                <div className = {(this.state.smallInfo)?'ak-movie_small-info':'ak-movie_small-info ak-movie_small-info__noinfo'}>
                                    {this.props.item.overview}
                                </div>
                            </div>
                            <div className = 'ak-movie_button ak-movie_button__addToCollection'
                                onClick = {() => alert('add')}>
                                add
                            </div>
                        </div>
                        <div className = 'ak-movie_titile'>
                            {this.props.item.title}
                        </div>
                   </div>
                </div>
            </NavLink>
        )
    }
}