import React, { Component } from 'react';
import "./add-movie-form.component.less";

import { connect } from 'react-redux'; 

import { addMovieFormHide, 
    hideSidebar, 
    getInformationFromServer, 
    addMyMovie } from './../../store/actions/index.js'

import { CommonInput } from './../small-components/common-input.component/common-input.component.jsx'
import { CommonTextarea } from '../small-components/common-textarea.component/common-textarea.component.jsx';

class AddMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: '',
            genre_ids: [],
            adult: false,
            isDisable: true,
            poster_path: ''

        }
        this.checkValid = this.checkValid.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.addGenre = this.addGenre.bind(this);
        this.isAdult = this.isAdult.bind(this);
        this.cancel = this.cancel.bind(this);

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
        let genreID = 0;        
        if (e.target.type === 'checkbox') {
            this.props.genre.forEach(function(element) {
                if (element.name === e.target.value) {
                    genreID = element.id;
                }
            }, this);
            console.log (`${e.target.value}`);

            if (this.state.genre_ids.indexOf(genreID) === -1) {
                this.setState({genre_ids: this.state.genre_ids.push(genreID)})
            } else {
                for (let i =0; i<this.state.genre_ids.length; i++) {
                    if (e.target.value === this.state.genre_ids[i]) {
                        this.state.genre_ids.splice(i,i);
                    }
                }  
            } 
        }
        console.log(this.state.genre_ids)
    }

    isAdult(e) {
        console.log (e.target);
        if (this.state.adult) {
            this.setState({adult: false});
        } else {
            this.setState({adult: true}); 
        }
    }

   cancel() {
        this.setState  ({
            title: '',
            overview: '',
            genre_ids: [],
            adult: false,
            poster_path: '',
        })
        this.props.addMovieFormHide();
    }

    saveMovie() {
        let newMovie = {
            title : this.state.title,
            overview : this.state.overview,
            genre_ids : this.state.genre_ids,
            adult: this.state.adult,
            poster_path: this.state.poster_path,
            id: Date.now().toString()                            //Math.random()*(1000-1)            
        }
        this.props.addMyMovie (newMovie);
        this.props.addMovieFormHide();
    }

    render() {
        return (
            <form className = {this.props.addMovieFormIsOpened? 'ak-addmovieform ak-addmovieform__flex ak-maininformation_addmovieform': 'ak-addmovieform ak-addmovieform__none ak-maininformation_addmovieform'}
                onSubmit = {() => this.saveMovie ()}>  
                <div className = 'ak-addmovieform_innerblock'>
                    <div className = 'ak-addmovieform_label'>   
                        Add movie
                    </div>
                    <hr/>
                    <CommonInput 
                        title = 'Title' 
                        name = 'title' 
                        value = {this.state.title} 
                        onEvent = {this.onTitleChange.bind(this)}
                        erorrMessage = 'Title is required'
                    />
        
                    <CommonTextarea
                        label = 'Overview'
                        name = 'overview'
                        value = {this.state.overview}
                        onEvent = {this.onOverviewChange.bind(this)}
                    />
                </div>
                <div className = 'ak-addmovieform_innerblock'>
                {/*<div className = 'ak-addmovieform_label'>
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
                    <div className = 'ak-addmovieform_errormessage'>
                        Genre is required
        </div>*/}
                    <input type='checkbox' 
                        className = 'ak-addmovieform_checkboxbtn' 
                        value = {this.state.adult}
                        onClick = {this.isAdult}
                    />
                    <label className='ak-addmovieform_checkbox'>
                        Adult
                    </label>
                </div>
                <div className = 'ak-addmovieform_innerblock'>
            {/*        <input className = 'ak-addmovieform_uploadimg'
                        type = 'file'
                        accept = 'image/*'
                    />
                    <div className = 'ak-addmovieform_errormessage'>
                        Upload one poster as minimum
                    </div>*/}
                    <button className = 'ak-addmovieform_button ak-addmovieform_button__add'
                        disabled = {this.state.isDisable}
                        type = 'submit'
                        >
                        Add
                    </button>
                    <button className = 'ak-addmovieform_button ak-addmovieform_button__cancel'
                        onClick = {this.cancel}
                        type = 'reset'>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    const addMovieFormIsOpened = state.layoutState.addMovieFormIsOpened;
    const genre = state.genre.genre;
 
    
    return ({ addMovieFormIsOpened, genre});
}

const mapDispatchToProps = (dispatch) => ({
    addMovieFormHide: () => dispatch(addMovieFormHide()),
    addMyMovie: (newMovie) => dispatch(addMyMovie(newMovie)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm)
