import React, { Component } from 'react';

import './common-input.component.less'
    
export class CommonInput extends Component {

    render () {
        return (
            <div>
                <label className = 'ak-addmovieform_label'>
                    {this.props.title}
                </label>
                <input className = 'ak-addmovieform_input' 
                    type="text" 
                    name = {this.props.name}
                    value = {this.props.value}
                    onChange = {this.props.onEvent}
                />
                <div className = 'ak-addmovieform_errormessage'>
                    {this.props.erorrMessage}
                </div>
            </div>
        )
    }   
} 
    
