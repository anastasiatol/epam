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
        
    }

    render() {
        return (
            <NavLink to = {`/${this.props.pathWay}/${this.props.item.id}`}>
                <div className = {'ak-moviecollection_movie'}
                    style = {{backgroundImage : `url(https://image.tmdb.org/t/p/w500${this.props.item.poster_path})`}}
                />
            </NavLink>
        )
    }
}