import React, { Component } from 'react';
import { SidebarItem } from './sidebaritem.jsx';

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
    }

    render() {
        return (
            <div className = 'ak-sidebar ak-container_sidebar'>
                <div className = 'ak-sidebar_item'>
                    <div className = 'ak-sidebar_icon'>
                        значок меню
                    </div>
                    <div className = 'ak-sidebar_logo__big'>
                        Лого
                    </div>
                </div>
               
                {this.dataSidebarItems
                    .map((item, index) => {
                        return (
                            <SidebarItem 
                                img = {item.img}
                                name = {item.name}
                                key = {index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
