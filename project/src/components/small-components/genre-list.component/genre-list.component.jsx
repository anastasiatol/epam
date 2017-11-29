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