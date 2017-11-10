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
        this.isOpened = 'true'
    }

    hideSidebar() {
        let classNames = ['ak-container_sidebar', 'ak-sidebar_logo__big', 'ak-sidebar_itemname', 'ak-container_maininformation'];
        if (this.isOpened === 'true') {
            for (let i = 0; i<classNames.length; i++) {
                let elements = document.getElementsByClassName(classNames[i]);
                for (let j=0; j<elements.length; j++) {
                    elements[j].classList.add ((classNames[i]+'__nosidebar'));
                }
            }
            this.isOpened = 'false'
        } else {
            for (let i = 0; i<classNames.length; i++) {
                let elements = document.getElementsByClassName(classNames[i]);
                for (let j=0; j<elements.length; j++) {
                    elements[j].classList.remove ((classNames[i]+'__nosidebar'));
                }
            }
            this.isOpened = 'true';
        }
    }

    render() {
        return (
            <div className = 'ak-sidebar ak-container_sidebar'>
                <div className = 'ak-sidebar_item'>
                    <div className = 'ak-sidebar_icon' onClick={this.hideSidebar.bind(this)}>
                        МЕ
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
