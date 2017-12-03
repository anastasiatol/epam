import React, { Component } from 'react';

import './progressbar.component.less'
    
export class Progressbar extends Component {

    render () {
        return (
            <div className = 'ak-progess-scale ak-progess-scale__fl'>
                <div className = 'ak-progress-scale_title'>
                    {this.props.title}
                </div>
                <progress className = 'ak-progress-scale_block ak-progress-scale_block__yellow' 
                    value = {this.props.value} 
                    max = {this.props.max}
                />
            </div>
        )
    }
}