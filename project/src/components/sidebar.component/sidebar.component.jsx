import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'
import { connect } from 'react-redux'; 

import {hideSidebar} from './../../store/actions/index.jsx'

export class Sidebar extends Component {

    constructor(props) {
        super(props);
      
/*        this.opened = 
            {
                containerClass: 'ak-sidebar ak-container_sidebar',
                logoClass: 'ak-sidebar_logo__big',
                itemnameClass: 'ak-sidebar_itemname'    
            }   
        this.closed = 
        {
            containerClass: 'ak-sidebar ak-container_sidebar ak-container_sidebar__nosidebar',
            logoClass: 'ak-sidebar_logo__big ak-sidebar_logo__big__nosidebar',
            itemnameClass: 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'    
        }
        this.state = 
        {
            containerClass: 'ak-sidebar ak-container_sidebar',
            logoClass: 'ak-sidebar_logo__big',
            itemnameClass: 'ak-sidebar_itemname'    
        } 
        this.isOpened = true
    }

    hideSidebar() {
        if (this.isOpened) {
            this.setState ({
                containerClass : this.closed.containerClass,
                logoClass : this.closed.logoClass,
                itemnameClass : this.closed.itemnameClass
            });
            this.isOpened = false
        } else {
            this.setState ({
                containerClass : this.opened.containerClass,
                logoClass : this.opened.logoClass,
                itemnameClass : this.opened.itemnameClass
            });
            this.isOpened = true;
        }*/
    }

    render() {
        return (
            <div className = {this.props.sidebarStateIsOpened? 'ak-sidebar ak-container_sidebar' : 'ak-sidebar ak-container_sidebar ak-container_sidebar__nosidebar'}>
                <div className = 'ak-sidebar_item'>
                    <div className = 'ak-sidebar_icon' 
                        onClick = {() => {this.props.hideSidebar()}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    >
                        МЕ
                    </div>
                    <div className = {this.props.sidebarStateIsOpened? 'ak-sidebar_logo__big': 'ak-sidebar_logo__big ak-sidebar_logo__big__nosidebar'}>
                        Лого
                    </div>
                </div>
               
                <div className = 'ak-sidebar_item'>
                    <NavLink to = '/movies' className = 'ak-sidebar_icon'>
                        1
                    </NavLink>
                    <NavLink to = '/movies' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        Movies
                    </NavLink>
                </div>  
           
                <div className = 'ak-sidebar_item' >
                    <NavLink to = '/tvshows' className = 'ak-sidebar_icon'>
                        2
                    </NavLink>
                    <NavLink to = '/tvshows' className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        TVShows
                    </NavLink>
                </div>  

                <div className = 'ak-sidebar_item' >
                    <div className = 'ak-sidebar_icon'>
                        3
                    </div>
                    <div className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        My Library
                    </div>
                </div> 
                <div className = 'ak-sidebar_item' >
                    <div className = 'ak-sidebar_icon'>
                        4
                    </div>
                    <div className = {this.props.sidebarStateIsOpened? 'ak-sidebar_itemname': 'ak-sidebar_itemname ak-sidebar_itemname__nosidebar'}>
                        Support
                    </div>
                </div>              
            </div>
        )
    }
}