import React, { Component } from 'react';
import "./main-menu.component.less";
import { NavLink } from 'react-router-dom';

export const Mainmenu = (props) => {
        return (
            <div className = 'ak-mainmenu ak-mainmenuline_mainmenu'>
                <div className = {props.addMovieBtnIsOpened? 'ak-mainmenu_item': 'ak-mainmenu_item__hide'}
                    onClick = {() => {props.addMovieFormHide()}}
                >
                    Add movie                
                </div>
                <NavLink to = '/about'  className = 'ak-mainmenu_item'>
                    
                    About           
                </NavLink>
            </div> 
        );
    }