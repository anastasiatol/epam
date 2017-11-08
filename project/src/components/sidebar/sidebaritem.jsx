import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SidebarItem extends Component {
    

    render(){
        return (
            <div className = 'ak-sidebar_item'>
                <div className = 'ak-sidebar_icon'>
                    {this.props.img}
                </div>
                <div className = 'ak-sidebar_itemname'>
                    {this.props.name}
                </div>
            </div>      
        );
    }


}