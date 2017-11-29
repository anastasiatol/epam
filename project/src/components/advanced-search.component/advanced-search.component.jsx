import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { 
    addMovieFormHide,
    doAdvancedSearch 
} from './../../store/actions/index.js'

import './advanced-search.component.less'

import { CommonInput } from './../small-components/common-input.component/common-input.component.jsx'
import { CommonTextarea } from './../small-components/common-textarea.component/common-textarea.component.jsx'
import { GenreList } from './../small-components/genre-list.component/genre-list.component.jsx'

class AdvancedSearch extends Component {
    constructor (props) {
        super (props);

        this.state ={
            title : this.props.advancedSearch.title,
            overview : this.props.advancedSearch.overview,
            genre_ids : this.props.advancedSearch.genre_ids,
            adult : this.props.advancedSearch.adult,
            rememberInputs : this.props.advancedSearch.rememberInputs
        }
    }

    onTitleChange(e) {
        this.setState ({title : e.target.value});
    }

    onOverviewChange(e) {
        this.setState ({overview : e.target.value});
    }

    genreChange(e) {
        if (e.target.type === 'checkbox') {
            for (let i = 0; i<this.props.genre.length; i++) {
                if ( e.target.value === this.props.genre[i].name) {
                    if (e.target.checked) {
                        this.setState({genre_ids: this.state.genre_ids.concat(this.props.genre[i].id)})
                    } else {
                        this.setState({genre_ids: this.state.genre_ids.filter(v => v !== this.props.genre[i].id)})
                    }
                }
            }
        }
        console.log('this.state.genre_id', this.state.genre_ids)
    }
    
    adultChange(e) {
        this.setState ({adult : !this.state.adult})
    }

    rememberInputs(e) {
        this.setState ({rememberInputs : !this.dataSearch.rememberInputs})
    }
    
    render () {
        return ( 
            <div className = {this.props.advancedSearchIsOpened ? 'ak-advanced-search' : 'ak-advanced-search ak-advanced-search__hide'}>
                <div className = 'ak-advanced-search_title'>
                    Advanced search
                </div>
                <hr/>
                <div className = 'ak-advanced-search_inner-container'>
                    <CommonInput
                        title = 'Title'
                        name = 'title'
                        value = {this.state.title}
                        onEvent = {this.onTitleChange.bind(this)}
                    />
                    <CommonTextarea 
                        lable = 'Overview'
                        name = 'overview'
                        value = {this.state.overview}       
                        onEvent = {this.onOverviewChange.bind(this)}
                    />
                </div>
                <GenreList
                    onEvent = {this.genreChange.bind(this)}
                
                />
                <input type='checkbox' 
                    className = 'ak-advanced-search_checkboxbtn' 
                    value= {this.state.adult} 
                    onClick = {this.adultChange.bind(this)}
                />
                <label className='ak-addmovieform_checkbox'>
                    Adult
                </label>
                <input type='checkbox' 
                    className = 'ak-advanced-search_checkboxbtn' 
                    value = {this.state.rememberInputs} 
                    onClick = {this.rememberInputs.bind(this)}
                />
                <label className='ak-advanced-search_checkbox'>
                    Remember inputs
                </label>
                <button className = 'ak-addmovieform_button ak-addmovieform_button__cancel'
                    onClick = {() => this.props.doAdvancedSearch(this.state)}       //add data
                >
                    Search
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    var movieCollection = state.movieCollection.movieCollection;
    var showCollection = state.tvShowCollection.showCollection;
    const genre = state.genre.genre;
    var mylibrary = state.myLibraryCollection.myLibraryCollection;
    var advancedSearch = state.advancedSearch.advancedSearch
    
    return ({ movieCollection, showCollection, genre, mylibrary, advancedSearch});
}

const mapDispatchToProps = (dispatch) => ({
    doAdvancedSearch: (dataSearch) => dispatch(doAdvancedSearch(dataSearch))    //add data 

})

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch)