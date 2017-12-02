import React, { Component } from 'react';

import './genre-list.component.less'
    
export class GenreList extends Component {

    render () {
        return (
            <div>
                <div className = 'ak-addmovieform_label'>
                    Genre
                </div>
                <div className = 'ak-addmovieform_checkboxbtncontainer'
                    onClick = {this.props.onEvent}>
                    <div className = 'ak-addmovieform_halfcheckboxbtncontainer'>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Action' 
                                checked = {this.props.value.Action}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Action
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Adventure' 
                                checked = {this.props.value.Adventure}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Adventure
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Thriller' 
                                checked = {this.props.value.Thriller}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Thriller
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Comedy' 
                                checked = {this.props.value.Comedy}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Comedy
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Fantasy'
                                checked = {this.props.value.Fantasy} 
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Fantasy
                            </label>
                        </p>
                    </div>
                    <div className = 'ak-addmovieform_halfcheckboxbtncontainer'>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Drama' 
                                checked = {this.props.value.Drama}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Drama
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Horror'
                                checked = {this.props.value.Horror}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Horror
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Crime' 
                                checked = {this.props.value.Crime}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Crime
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='War' 
                                checked = {this.props.value.War}
                            />
                            <label className='ak-addmovieform_checkbox'>
                                War
                            </label>
                        </p>
                        <p>
                            <input type='checkbox' 
                                className = 'ak-addmovieform_checkboxbtn' 
                                name = 'Genre' 
                                value='Documentary'
                                checked = {this.props.value.Documentary} 
                            />
                            <label className='ak-addmovieform_checkbox'>
                                Documentary
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}