import React, { Component } from 'react';

import './common-input.component.less'
    
export class CommonInput extends Component {

    render () {
        return (
            <div className = 'ak-common-input'>
                <label className = 'ak-common-input_label'>
                    {this.props.title}
                </label>
                <input className = 'ak-common-input_input' 
                    type="text" 
                    name = {this.props.name}
                    value = {this.props.value}
                    onChange = {this.props.onEvent}
                />
                <div className = 'ak-common-input_errormessage'>
                    {this.props.erorrMessage}
                </div>
            </div>
        )
    }   
} 
    
