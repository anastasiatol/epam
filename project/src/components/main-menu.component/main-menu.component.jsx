import React, { Component } from 'react';

export class Mainmenu extends Component {

    constructor(props) {
        super(props);
        this.addMovie = this.addMovie.bind(this);
        
    }

    addMovie() {
        this.props.addMovieOpen();
    }
    
    render() {
        return (
            <div className = 'ak-mainmenu ak-mainmenuline_mainmenu'>
                <div className = 'ak-mainmenu_item'
                    onClick = {this.addMovie}
                >
                    Add movie                
                </div>
                <div className = 'ak-mainmenu_item'>
                    About           
                </div>
                <div className = 'ak-mainmenu_item'>
                    Pricing                
                </div>
                <div className = 'ak-mainmenu_item'>
                    Blog                
                </div>
            </div> 
        );
    }
}