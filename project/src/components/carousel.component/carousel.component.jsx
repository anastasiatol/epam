import React, { Component } from 'react';
import "./carousel.component.less";

export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImg :7
        }
        this.imgArr = [
            './../src/img/About.png',
            './../src/img/Add movie.png',
            './../src/img/Add movie(validations).png',
            './../src/img/Added notifications.png',
            './../src/img/Empty library.png',
            './../src/img/Main Page (Hide Dashboard).png',
            './../src/img/Main Page (Search).png',
            './../src/img/Main Page(add to library).png',
            './../src/img/Main Page(remove from library).png',
            './../src/img/Main Page(Scroll).png',
            './../src/img/Main Page(Scroll).png',
            './../src/img/Movie Information.png',
            './../src/img/My Library.png',
            './../src/img/Remove movie from library.png',
            './../src/img/Support.png'
        ]
    }

    previousImg() {
        if (this.state.currentImg>0) {
            this.setState({currentImg:(this.state.currentImg-1)})
        } else {
            this.setState({currentImg: this.imgArr.length})
        }
    }
    nextImg() {
        if (this.state.currentImg<(this.imgArr.length-1)) {
            this.setState({currentImg:(this.state.currentImg+1)})
        } else {
            this.setState({currentImg:0})
        }
    }

    render() {
        return (
            <div className = 'ak-carousel ak-my-info-page_carousel'>
                <img className = 'ak-carousel_picture'
                    src = {this.imgArr[this.state.currentImg]}  
                    alt = 'img'/> 
                <div className = 'ak-carousel_buttons'>
                    <div className = 'ak-carousel_single-button'
                        onClick = {()=> this.previousImg()}>
                        prev
                    </div>
                    <div className = 'ak-carousel_single-button'
                        onClick = {()=> this.nextImg()}>
                        next
                    </div>
                </div>   
            </div>
        )
    }
}
