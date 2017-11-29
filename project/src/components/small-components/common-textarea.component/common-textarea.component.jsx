import React, { Component } from 'react';

import './common-textarea.component.less'
    
export class CommonTextarea extends Component {

    render () {
        return (
        <div>
            <label className = 'ak-addmovieform_label'>
                {this.props.lable}
            </label>
            <textarea className = 'ak-addmovieform_input' 
                rows = '3'
                name = {this.props.name}
                value = {this.props.value}
                onChange = {this.props.onEvent}
                >
            </textarea>
        </div>
        )
    }
}