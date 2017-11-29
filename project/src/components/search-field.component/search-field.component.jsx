import React, { Component } from 'react';
import './search-field.component.less'

export class Searchfield extends Component {
    
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    searchMovie(e) {
        this.props.movieToFind(e.target.value);
    }

    render(){
        return (
            <div className = 'ak-searchfield ak-mainmenuline_searchfield'>
                <input className = 'ak-searchfield_text'
                        onChange = {this.searchMovie}
                        type='text'
                        placeholder = 'Search'
                />
                <div className = 'ak-searchfield_searchicon'>
                    find
                </div>
            </div>      
        );
    }
}