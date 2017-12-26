import React, { Component } from 'react';
import "./add-movie-form.component.less";

import { connect } from 'react-redux'; 

import { addMovieFormHide, 
    hideSidebar, 
    getInformationFromServer, 
    addMyMovie } from './../../store/actions/index.js'

import { CommonInput } from './../small-components/common-input.component/common-input.component.jsx'
import { CommonTextarea } from '../small-components/common-textarea.component/common-textarea.component.jsx';
import { GenreList} from './../small-components/genre-list.component/genre-list.component.jsx'

let defaultPoster = require('./../../img/default-poster.png');

class AddMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: '',
            genre_ids: [],
            genre: {
                'Action': false,
                'Adventure': false,
                'Thriller': false,
                'Comedy': false,
                'Fantasy': false,
                'Drama': false,
                'Horror': false,
                'Crime': false,
                'War': false,
                'Documentary': false
            },
            adult: false,
            isDisable: true,
            poster_path: ''

        }
        this.checkValid = this.checkValid.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.isAdult = this.isAdult.bind(this);
        this.cancel = this.cancel.bind(this);
        this.genreChange = this.genreChange.bind(this)

    }
 
    checkValid() {
        this.setState( function (prevState) {
            if ((prevState.title) && (prevState.genre_ids.length)) {
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
    
    genreChange(e) {
        if (e.target.type === 'checkbox') {
            let genreArr = this.state.genre;
            genreArr[e.target.value] = !genreArr[e.target.value]
            this.setState({genre : genreArr});
            for (let i = 0; i<this.props.genre.length; i++) {
                if ( e.target.value === this.props.genre[i].name) {
                    if (e.target.checked) {
                        this.setState({genre_ids: this.state.genre_ids.concat(this.props.genre[i].id)})
                    } else {
                        this.setState({genre_ids: this.state.genre_ids.filter(v => v !== this.props.genre[i].id)})
                    }
                }
            }
            this.checkValid();
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
            poster_path: 'url(../img/default-poster.png)',
            type: 'movie',
            id: (Date.now().toString())           
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
                <GenreList
                    onEvent = {this.genreChange.bind(this)}
                    value = {this.state.genre}
                    />
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
                    <div className = 'ak-addmovieform_button-container'>
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
