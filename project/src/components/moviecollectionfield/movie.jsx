import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
    constructor(props) {
        super(props);
   
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
