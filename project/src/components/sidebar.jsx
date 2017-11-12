import React, { Component } from 'react';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.dataSidebarItems = [
            {
                img: '1',
                name: 'Movies'
            },
            {
                img: '2',
                name: 'TV Shows'
            },
            {
                img: '3',
                name: 'My Library'
            },
            {
                img: '4',
                name: 'Support'
            },
        ]
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
               
                {this.dataSidebarItems
                    .map((item, index) => {
                        return (
                            <div className = 'ak-sidebar_item' key = {index}>
                                <div className = 'ak-sidebar_icon'>
                                    {item.img}
                                </div>
                                <div className = {this.state.itemnameClass}>
                                    {item.name}
                                </div>
                            </div>  
                            
                           
                        )
                    })
                }
            </div>
        )
    }
}
