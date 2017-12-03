import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'
import { connect } from 'react-redux'; 

import "./sidebar.component.less";

export class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {this.props.sidebarStateIsOpened? 'ak-sidebar ak-container_sidebar' : 'ak-sidebar ak-container_sidebar ak-container_sidebar__nosidebar'}>
                <div className = 'ak-sidebar_item'>
                    <img src='./src/img/menu.png'
                        className = 'ak-sidebar_icon' 
                        onClick = {() => {this.props.hideSidebar()}}
                    />
                    <img src='./src/img/logo.png' 
                        className = {this.props.sidebarStateIsOpened? 'ak-sidebar_logo': 'ak-sidebar_logo ak-sidebar_logo__nosidebar'}
                        onClick = {() => {this.props.hideSidebar()}}
                        alt = 'Logo'
                    />
                </div>
                <div className = 'ak-sidebar_item'>
                    <NavLink 
                        to = '/movies' 
                        className = 'ak-sidebar_link'>
                        <img src = './src/img/movies.png' className = 'ak-sidebar_icon'/>
                    </NavLink>
                    <NavLink to = '/movies' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        Movies
                    </NavLink>
                </div>  
           
                <div className = 'ak-sidebar_item' >
                    <NavLink to = '/tvshows' className = 'ak-sidebar_link'>
                        <img src = './src/img/tvshows.png' className = 'ak-sidebar_icon'/>
                    </NavLink>
                    <NavLink to = '/tvshows' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        TVShows
                    </NavLink>
                </div>  

                <div className = 'ak-sidebar_item' >
                    <NavLink to = '/mylibrary' className = 'ak-sidebar_link'>
                        <img src = './src/img/mylibrary.png' className = 'ak-sidebar_icon'/>
                    </NavLink>
                    <NavLink to = '/mylibrary' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        My Library
                    </NavLink>
                </div> 

                <div className = 'ak-sidebar_item' >
                    <NavLink to = '/support' className = 'ak-sidebar_link'>
                        <img src = './src/img/supporticon.png' className = 'ak-sidebar_icon'/>
                    </NavLink>
                    <NavLink to = '/support' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        Support
                    </NavLink>
                </div>              
            </div>
        )
    }
}