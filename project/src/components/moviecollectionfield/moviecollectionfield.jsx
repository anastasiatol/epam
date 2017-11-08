import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie.jsx';

var getMoviecollection = function () {
    
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../src/data.json', false);
        xhr.send();
        return (xhr.responseText);
    }    

export class MovieCollectionField extends Component {
    
    constructor (props) {
        super(props);
        let moviecollectionjson = getMoviecollection()
        this.moviecollection = JSON.parse(moviecollectionjson);
                console.log(this.moviecollection);
        }
    
    render() {
        return (
            <div className = 'ak-moviecollection ak-maininformation_moviecollection'>    
            {this.moviecollection 
                            .map((item, index) => {
                                return (
                                    <Movie
                                        key = {index}
                                        vote_count = {item.vote_count}
                                        id = {item.id}
                                        video = {item.video}
                                        vote_average = {item.vote_average}
                                        title = {item.title}
                                        popularity = {item.popularity}
                                        poster_path = {item.poster_path}
                                        original_language = {item.original_language}
                                        original_title = {item.original_title}
                                        genre_ids = {item.genre_ids}
                                        backdrop_path = {item.backdrop_path}
                                        adult = {item.adult}
                                        overview = {item.overview}
                                        release_date = {item.release_date}
                                     />
                                )
                            })
                        }
                    </div>
                    )                
                
            
        }
    }

