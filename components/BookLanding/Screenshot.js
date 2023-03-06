import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    dots: false,
    margin: 30,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1024:{
            items:3,
        }
    }
}

const images = [
    '/images/page1.jpg',
    '/images/page2.jpg',
    '/images/page3.jpg',
    '/images/page4.jpg',
    '/images/page5.jpg',
    '/images/page6.jpg',
    '/images/page7.jpg'
]

class Screenshot extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false,
        display: false
    }
    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="screenshot-area page-from-book ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Pages From Book</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        {this.state.display ? <OwlCarousel 
                            className="screenshot-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page1.jpg' alt="screenshot" />
         
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 0, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page2.jpg' alt="screenshot" />
                           
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 1, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div>
                                </div>
                            </div>
  
                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page3.jpg' alt="screenshot" />
        
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 2, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page4.jpg' alt="screenshot" />

                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 3, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page5.jpg' alt="screenshot" />
                                
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 4, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page6.jpg' alt="screenshot" />
                                      
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 5, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="screenshot-item">
                                    <img src='/images/page7.jpg' alt="screenshot" />
 
                                    <div 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ photoIndex: 6, isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Screenshot;
