import React, { Component } from 'react';
import "./collection.component.less";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'

export class Collection extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className = 'ak-moviecollection ak-maininformation_moviecollection'>    
            {this.props.collection
                .map((item, index) => {
                    return (
                        <NavLink to = {`/${this.props.pathWay}/${item.id}`}
                            key = {index}>
                            <div className = {'ak-moviecollection_movie'}
                                style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${item.poster_path})`}}
                            >
                            </div>
                        </NavLink>
                    )
                })
            }
        </div> 
        );
    }
}