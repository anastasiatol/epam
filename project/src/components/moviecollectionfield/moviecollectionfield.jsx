import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie.jsx';

   

export class MovieCollectionField extends Component {
    
    constructor (props) {
        super(props);
        
    }

    render() {
        this.state = { moviecollection : this.props.moviecollection };
        return (
            <div className = 'ak-moviecollection ak-maininformation_moviecollection'>    
                { this.state.moviecollection
                    .map((item, index) => {
                        return (
                            <Movie
                                key = {index}
                                id = {item.id}
                            />
                        )
                    })
                }
            </div>
        )                
    }
}

