import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Mainmenu extends Component {

    constructor(props) {
        super(props);
        this.menuitems = [
            'Add movie',
            'About',
            'Pricing',
            'Blog'
        ]
    }
    
    render() {
        return (
            <div className = 'ak-mainmenu ak-mainmenuline_mainmenu'>
               {this.menuitems
                    .map((item, index) => {
                        return (
                            <div className = 'ak-mainmenu_item' key = {index}>
                                {item}
                            </div>
                        )}
                    )
                }
            </div>      
        );
    }
}