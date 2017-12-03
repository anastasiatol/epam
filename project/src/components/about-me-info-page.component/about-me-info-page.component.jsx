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
                        I've built this website
                    </div>
                    <div className = 'ak-my-info-page_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper a mauris vel pharetra. Fusce mollis interdum porttitor. Curabitur vel erat aliquet, efficitur urna a, blandit ipsum. Aenean dapibus, enim sit amet pharetra congue, diam erat bibendum eros, a varius massa mi et tortor. Mauris consectetur mi a turpis pretium, eget tincidunt ligula tristique. In hendrerit nulla libero, id tristique tortor placerat eget. Suspendisse potenti.
                        Ut feugiat nibh eros, a laoreet velit gravida non. Aliquam erat volutpat. Proin id efficitur erat. Vivamus tempus pharetra dolor laoreet euismod. Sed sed lacus quis ex blandit rutrum. Maecenas condimentum dolor vel diam ornare, vitae suscipit nulla euismod. Proin ac augue eget nulla hendrerit mollis. Aliquam vehicula urna a fermentum sodales. Duis ut sollicitudin ligula.
                        Duis a nunc at risus ornare consequat a vitae metus. Aenean purus lacus, convallis eleifend bibendum eu, blandit quis mauris. Nunc vestibulum turpis in dui consequat, non efficitur eros pulvinar. Donec mattis ultrices libero vitae viverra. Pellentesque sed velit consequat leo suscipit interdum. Vestibulum imperdiet aliquam lacus, a sollicitudin nibh lacinia sit amet. Phasellus in eros et sem congue lacinia. Fusce non augue vitae velit suscipit malesuada. Aenean molestie accumsan erat a volutpat.
                        Sed id augue vestibulum, dignissim massa pellentesque, pellentesque eros. Curabitur laoreet enim vitae mauris rutrum feugiat vel consectetur ligula. Mauris commodo ac velit eget sagittis. Praesent maximus imperdiet libero, non vehicula dui scelerisque in. Fusce aliquet blandit elit, sit amet euismod orci porta sit amet. Integer elementum nulla nec nulla porttitor, eu dignissim arcu sollicitudin. Aliquam nisi augue, dignissim in arcu vel, tincidunt venenatis dui. Duis augue magna, dictum a nibh ut, tincidunt vehicula ante. Suspendisse nec elit elementum, semper dui a, ullamcorper risus. Cras porta cursus sem sit amet egestas.
                        Morbi ac viverra leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lacus venenatis, placerat erat eget, rutrum purus. In congue congue fringilla. Praesent vel hendrerit nibh. Morbi id dolor eget mi consequat condimentum. Ut vulputate, sapien sit amet pharetra accumsan, orci lectus fermentum ligula, id hendrerit ante purus ac metus. Nullam sem sem, iaculis malesuada lacus id, ullamcorper viverra metus. Morbi in ultrices magna, sed fringilla augue. Donec id est justo. Quisque laoreet rhoncus mi a maximus. Aliquam eget metus eu ex porta posuere. Donec orci eros, efficitur vulputate tellus ut, pellentesque dapibus erat. Nulla id maximus felis. Nam nec aliquet neque.
                    </div>
                </div>
                <Carousel/> 
            </div>
        )
    }
}