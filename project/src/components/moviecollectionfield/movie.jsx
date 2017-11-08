import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.vote_count = props.vote_count;
        this.id = props.id
        this.video = props.video
        this.vote_average = props.vote_average
        this.title = props.title
        this.popularity = props.popularity
        this.poster_path = props.poster_path
        this.original_language = props.original_language
        this.original_title = props.original_title
        this.genre_ids = props.genre_ids
        this.backdrop_path = props.backdrop_path
        this.adult = props.adult
        this.overview = props.overview
        this.release_date = props.release_date
    }

    render () {
        return (
            <div 
                className = {'ak-moviecollection_movie ak-moviecollection_movie__'+this.props.id}
            >

            </div>
        )
    }
}
