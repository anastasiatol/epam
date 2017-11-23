import React, { Component } from 'react';
import "./collection.component.less";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom';
import { connect } from 'react-redux';

import { getInformationFromServer } from './../../store/actions/index.jsx'

import {ItemCollection} from './../item-collection.component/item-collection.component.jsx'

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
                        <ItemCollection 
                            pathWay = {this.props.pathWay} 
                            item = {item}
                            key = {index}
                        />
                    )
                })
            }
        </div> 
        )
    }
}
