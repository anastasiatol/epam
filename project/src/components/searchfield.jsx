import React, { Component } from 'react';

export class Searchfield extends Component {
    
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    searchMovie(e) {
        this.props.movietofind(e.target.value);
    }

    render(){
        return (
            <div className = 'ak-searchfield ak-mainmenuline_searchfield'>
                <div className = 'ak-searchfield_searchicon'>
                </div>
                    <input className = 'ak-searchfield_text'
                        onChange = {this.searchMovie}
                        type='text'
                        placeholder = 'Search'
                />
            </div>      
        );
    }
}