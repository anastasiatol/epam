import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Mainmenu = (props) => {
        return (
            <div className = 'ak-mainmenu ak-mainmenuline_mainmenu'>
                <div className = 'ak-mainmenu_item'
                    onClick = {() => {props.addMovieFormHide()}}
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