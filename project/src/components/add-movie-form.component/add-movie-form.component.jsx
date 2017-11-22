import React, { Component } from 'react';
import "./add-movie-form.component.less";

export class AddMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: '',
            genre: {
                Action: false,
                Adventure: false,
                Thriller: false,
                Comedy: false,
                Fantasy: false,
                Drama: false,
                Horror: false,
                Criminal: false,
                War: false,
                Documentary: false,
            },
            adult: false,
            isDisable: true,
            poster_path: ''

        }
        this.checkValid = this.checkValid.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.addGenre = this.addGenre.bind(this);
        this.isAdult = this.isAdult.bind(this);

    }
 
    checkValid() {
        this.setState( function (prevState) {
            if ((prevState.title) /*&& (prevState.poster_path)*/) {
                return {isDisable : false}
            } else {
                return {isDisable : true}
            }
        })
    }
    
    onTitleChange(e) {
        this.setState({title: e.target.value});
        this.checkValid()
    }

    onOverviewChange(e) {
        this.setState({overview: e.target.value})
    }
    
    addGenre(e) {
        if (e.target.type === 'checkbox') {
            console.log (`${e.target.value}`);
            if (this.state.genre[e.target.value]) {
    //            this.setState({genre: { `${e.target.value} : true});
            } else {
    //            this.setState({genre[e.target.value] : true});
            }
        }
    }

    isAdult(e) {
        console.log (e.target);
        if (this.state.adult) {
            this.setState({adult: false});
        } else {
            this.setState({adult: true}); 
        }
    }

    render() {
        return (
            <form className = {this.props.addMovieFormIsOpened? 'ak-addmovieform ak-addmovieform__flex ak-maininformation_addmovieform': 'ak-addmovieform ak-addmovieform__none ak-maininformation_addmovieform'} 
                action = '' 
                method = ''
                >
                <div className = 'ak-addmovieform_innerblock'>
                    <div className = 'ak-addmovieform_label'>   
                        Add movie
                    </div>
                    <hr/>
                    <label className = 'ak-addmovieform_label' 
                        
                    >
                        Title
                    </label>
                    <input className = 'ak-addmovieform_input' 
                        type="text" 
                        name = 'title'
                        value = {this.state.title}
                        onChange = {this.onTitleChange}
                    />
                    <div className = 'ak-addmovieform_errormessage'>
                        Title is required
                    </div>
                    <label className = 'ak-addmovieform_label'>
                        Overview
                    </label>
                    <textarea className = 'ak-addmovieform_input' 
                        rows = '3'
                        name = 'overview'
                        value = {this.state.overview}
                        onChange = {this.onOverviewChange}
                    >
                    </textarea>
                </div>
                <div className = 'ak-addmovieform_innerblock'>
                <div className = 'ak-addmovieform_label'>
                    Genre
                </div>
                    <div className = 'ak-addmovieform_checkboxbtncontainer'
                        onClick = {this.addGenre}>
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
                                    value='Criminal' 
                                />
                                <label className='ak-addmovieform_checkbox'>
                                    Criminal
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
                    <div className = 'ak-addmovieform_errormessage'>
                        Genre is required
                    </div>
                    <input type='checkbox' 
                        className = 'ak-addmovieform_checkboxbtn' 
                        value='Adult' 
                        onClick = {this.isAdult}
                    />
                    <label className='ak-addmovieform_checkbox'>
                        Adult
                    </label>
                </div>
                <div className = 'ak-addmovieform_innerblock'>
                    <input className = 'ak-addmovieform_uploadimg'
                        type = 'file'
                        accept = 'image/*'
                    />
                    <div className = 'ak-addmovieform_errormessage'>
                        Upload one poster as minimum
                    </div>
                    <button className = 'ak-addmovieform_button ak-addmovieform_button__add'
                        type = 'submit'
                        disabled = {this.state.isDisable}
                        
                        >
                        Add
                    </button>
                    <button className = 'ak-addmovieform_button ak-addmovieform_button__cancel'
                        type = 'reset'>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}