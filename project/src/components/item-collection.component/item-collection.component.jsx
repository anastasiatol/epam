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
            <div className = {(this.props.isInLibrary)? 'ak-moviecollection_movie ak-movie ak-movie__inlibrary' : 'ak-moviecollection_movie ak-movie'}
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
                        <div className = {(this.props.isInLibrary)? 'ak-movie_button ak-movie_button__addToCollection ak-movie_button__inlibrary' : 'ak-movie_button ak-movie_button__addToCollection'}
                            onClick = {() => this.props.addToMyLibrary(this.props.item)}>
                            add
                        </div>
                        <div className = {(this.props.isInLibrary)? 'ak-movie_button ak-movie_button__delFromCollection' : 'ak-movie_button ak-movie_button__delFromCollection ak-movie_button__inlibrary'}
                            onClick = {() => this.props.deleteFromMyLibrary(this.props.item)}>
                            del
                        </div>
                    </div>
                    <NavLink to = {`/${this.props.pathWay}/${this.props.item.id}`}
                        className = 'ak-movie_link'>
                        <div className = 'ak-movie_title'>
                            {this.props.item.title}
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}