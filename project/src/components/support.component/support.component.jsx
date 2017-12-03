import React, { Component } from 'react';

import './support.component.less'
import { CommonInput } from '../small-components/common-input.component/common-input.component.jsx';
import { CommonTextarea } from '../small-components/common-textarea.component/common-textarea.component.jsx';
    
export class Support extends Component {

    componentWillMount () {
        this.props.changeHeadrStyle('support')
    }

    render () {
        return (
            <form className = 'ak-support'>
                <div className = 'ak-support_title'>
                    Request
                </div>
                <hr/>
                <CommonInput
                    plaseholder = 'Update movies'/>
                <div className = 'ak-support_description'>
                    Description
                </div>
                <CommonTextarea
                    placeholder = 'Please upload the newest movies into the Movies page'/>
                <div className = 'ak-support_button-container'>
                    <button className = 'ak-support_button ak-support_button__submit'
                        type = 'submit'
                        >
                        Submit
                    </button>
                    <button className = 'ak-support_button ak-support_button__cancel'
                        type = 'reset'>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}