import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addMovie} from './../../store/actions/index.jsx'

const Mainmenu = (props) => {
    console.log (props)
        return (
            <div className = 'ak-mainmenu ak-mainmenuline_mainmenu'>
                <div className = 'ak-mainmenu_item'
                    onClick = {() => {props.addMovie()}}
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


const mapStateToProps = (state) => {
    const isOpened = state.addMovieForm.isOpened;
    
    return { isOpened };    
}

const mapDispatchToProps = (dispatch) => ({
    addMovie: () => dispatch(addMovie())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainmenu)