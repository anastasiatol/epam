import React, { Component } from 'react';
import { Carousel } from './../carousel.component/carousel.component.jsx'

import './about-me-info-page.component.less'
    
export class AboutMeInfoPage extends Component {

    componentWillMount () {
        this.props.changeHeadrStyle('aboutme')
    }

    render () {
        return (
            <div className = 'ak-container_my-info-page ak-my-info-page'>
                <div className = 'ak-my-info-page_title'>
                    <div className = 'ak-my-info-page_title'>
                        I've built this website as my main project in Epam FrontEnd courses
                    </div>
                    <div className = 'ak-my-info-page_text'>
                        <p>It's my first big project. I've used my knowledge in React, Redux, NodeJS and Webpack.</p>
                        <ul>My website can do following features:
                            <li>- get data from the server (films and TVshows collections);</li>
                            <li>- create My library where you can add and delete movies and TVshows;</li>
                            <li>- the websie has two kinds of serches: the small one which filters by the name of the movie or TVshow and the advanced search which can remember all the search parameters even if you close the brouser.</li>
                            <li>- besides you can add your own movie which will be availible after you refresh or close the page (works with local storage)</li>
                        </ul>
                        <p>First of all this project was designed to train JS and React skills. Also I have CSS project which you can find <a href = 'https://anastasiatol.github.io/epam/hw7_project_css/'> here </a> </p>
                    </div>
                </div>
                <Carousel/> 
            </div>
        )
    }
}