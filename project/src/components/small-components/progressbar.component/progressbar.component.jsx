import React, { Component } from 'react';

import './progressbar.component.less'
    
export class Progressbar extends Component {

    render () {
        return (
            <div>
                <div className = 'ak-info_progess-scale-mini-container'>
                    {this.props.title}
                    <progress className = 'ak-info_progress-scale ak-info_progress-scale__yellow' 
                        value = {this.props.value} 
                        max = {this.props.max}
                    />
                </div>
            </div>
        )
    }
}