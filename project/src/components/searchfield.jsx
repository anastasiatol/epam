import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchfield extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Search',
            onChange: (newValue) => {
                this.setState({
                  textValue: newValue
                });
            }
        }
    }
        
    render(){
        return (
            <div className = 'ak-searchfield ak-mainmenuline_searchfield'>
                <div className = 'ak-searchfield_searchicon'>
                    
                </div>
                <div className = 'ak-searchfield_text'>
                    <input type='text'
                    
                />
                </div>
            </div>      
        );
    }
}