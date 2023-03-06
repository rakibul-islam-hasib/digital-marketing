import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = { 
    autoplay: true,
    nav: true,
    loop:true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 30,
    dots: false,
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
        1200:{
            items:4,
        }
    }
}

const images = [
    '/images/work-img1.jpg',
    '/images/work-img2.jpg',
    '/images/work-img3.jpg',
    '/images/work-img4.jpg',
    '/images/work-img5.jpg',
    '/images/work-img6.jpg'
]

class Works extends Component {

    state = {
        display:false,
        photoIndex: 0,
        isOpenImage: false,
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <>
                <section className="project-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Recent Work</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="row m-0">
                        {this.state.display ? <OwlCarousel 
                            className="project-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img1.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div> 
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img2.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img3.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div> 
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

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

                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img4.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img5.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12">
                                <div className="single-project">
                                    <div className="project-image">
                                        <img src='/images/work-img6.jpg' alt="work" />
                                        <div 
                                            className="popup-btn"
                                            onClick={e => { this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <span>Digital</span>
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Network Marketing</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                    <canvas id="canvas"></canvas>
                </section>
            </>
        );
    }
}

export default Works;
