import React, { Component } from 'react';

import './common-textarea.component.less'
    
export class CommonTextarea extends Component {

    render () {
        return (
        <div className = 'ak-textarea'>
            <label className = 'ak-textarea_label'>
                {this.props.lable}
            </label>
            <textarea className = 'ak-textarea_input' 
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