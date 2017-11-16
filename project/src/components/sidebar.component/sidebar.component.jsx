import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
    } from 'react-router-dom'

export class Sidebar extends Component {

    constructor(props) {
        super(props);
      
        this.opened = 
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
        }
    }

    render() {
        return (
            <div className = {this.state.containerClass}>
                <div className = 'ak-sidebar_item'>
                    <div className = 'ak-sidebar_icon' onClick={this.hideSidebar.bind(this)}>
                        МЕ
                    </div>
                    <div className = {this.state.logoClass}>
                        Лого
                    </div>
                </div>
               
                <div className = 'ak-sidebar_item'>
                    <div className = 'ak-sidebar_icon'>
                        1
                    </div>
                    <div className = {this.state.itemnameClass}>
                        Movies
                    </div>
                </div>  
           
                <div className = 'ak-sidebar_item' >
                    <NavLink to = '/tvshows' className = 'ak-sidebar_icon'>
                        2
                    </NavLink>
                    <NavLink to = '/tvshows' className = {this.state.itemnameClass}>
                        TVShows
                    </NavLink>
                </div>  

                <div className = 'ak-sidebar_item' >
                    <div className = 'ak-sidebar_icon'>
                        3
                    </div>
                    <div className = {this.state.itemnameClass}>
                        My Library
                    </div>
                </div> 
                <div className = 'ak-sidebar_item' >
                    <div className = 'ak-sidebar_icon'>
                        4
                    </div>
                    <div className = {this.state.itemnameClass}>
                        Support
                    </div>
                </div>              
            </div>
        )
    }
}
