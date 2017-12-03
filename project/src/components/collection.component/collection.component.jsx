import React, { Component } from 'react';
import "./collection.component.less";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom';
import { connect } from 'react-redux';

import {ItemCollection} from './../item-collection.component/item-collection.component.jsx'

export class Collection extends Component {

    constructor(props) {
        super(props);
        
    }

    componentDidUpdate () {
        this.props.changeHeadrStyle(this.props.pathWay)
    }

    render() {
        return (
            <div className = 'ak-moviecollection ak-maininformation_moviecollection'>    
            {this.props.collection
                .map((item, index) => {
                    if (this.props.itemIsInLibrary(item)) {
                        var isInLibrary = true
                    } else {
                        var isInLibrary = false
                    }
                    return (
                        <ItemCollection 
                            addToMyLibrary = {this.props.addToMyLibrary}
                            deleteFromMyLibrary = {this.props.deleteFromMyLibrary}
                            pathWay = {this.props.pathWay} 
                            item = {item}
                            key = {index}
                            isInLibrary = {isInLibrary}
                        />
                    )
                })
            }
        </div> 
        )
    }
}
