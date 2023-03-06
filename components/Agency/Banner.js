import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Link from 'next/link';
import dynamic from 'next/dynamic';
import VisibilitySensor from "react-visibility-sensor";
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    autoplay:true,
    nav:true,
    responsiveClass:true,
    dots:false,
    autoplayHoverPause:true,
    mouseDrag:true,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ]
}

class Banner extends Component {

    state = {
        isOpen: false,
        display:false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount(){ 
        this.setState({ display: true });
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <>
                {this.state.display ? <OwlCarousel 
                    className="home-slides startup-home owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner startup-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <VisibilitySensor>
                                            {({ isVisible }) => (
                                                <>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="hero-content">
                                                            <h1
                                                                className={
                                                                    isVisible ? "animated fadeInUp" : ''
                                                                }
                                                            >
                                                                It's Time To Create Your Own Business Scheme
                                                            </h1>
                                                            <p
                                                                className={
                                                                    isVisible ? "animated zoomIn" : ''
                                                                }
                                                            >
                                                                Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.
                                                            </p>
                                                            
                                                            <Link href="/#">
                                                                <a 
                                                                    className={`
                                                                        btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                    `}
                                                                >
                                                                    Get Started
                                                                </a>
                                                            </Link>
                                                            <Link href="/#">
                                                                <a
                                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                                    className={`
                                                                        video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                    `}
                                                                > 
                                                                    Watch Video 
                                                                    <i className="icofont-play-alt-3"></i>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="col-lg-6 col-md-12">
                                                        <div 
                                                            className={`
                                                                startup-image
                                                            `}
                                                        >
                                                            <img 
                                                                src='/images/startup-shape/board.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="board"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart1.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="chart1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart2.png' 
                                                                className="wow fadeInLeft"
                                                                data-wow-delay="0.6s"
                                                                alt="chart2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/check-mark.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="check-mark"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl1.png' 
                                                                className="wow bounceIn"
                                                                data-wow-delay="0.6s"
                                                                alt="girl1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl2.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="girl2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/line.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="line"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/man.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="man"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/progress.png'
                                                                className="wow rotateIn"
                                                                data-wow-delay="0.6s"
                                                                alt="progress"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/table.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="table"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/main-image.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="main-image"
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray shape-1"></div>
                        <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                        <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                        <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                        <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                        <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                        <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    </div>

                    <div className="main-banner startup-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <VisibilitySensor>
                                            {({ isVisible }) => (
                                                <>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="hero-content">
                                                            <h1
                                                                className={
                                                                    isVisible ? "animated fadeInUp" : ''
                                                                }
                                                            >
                                                                It's Time To Create Your Own Business Scheme
                                                            </h1>
                                                            <p
                                                                className={
                                                                    isVisible ? "animated zoomIn" : ''
                                                                }
                                                            >
                                                                Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.
                                                            </p>
                                                            
                                                            <Link href="/#">
                                                                <a 
                                                                    className={`
                                                                        btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                    `}
                                                                >
                                                                    Get Started
                                                                </a>
                                                            </Link>
                                                            <Link href="/#">
                                                                <a
                                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                                    className={`
                                                                        video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                    `}
                                                                > 
                                                                    Watch Video 
                                                                    <i className="icofont-play-alt-3"></i>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="col-lg-6 col-md-12">
                                                        <div 
                                                            className={`
                                                                startup-image ${isVisible ? "animated zoomIn" : ''}
                                                            `}
                                                        >
                                                            <img 
                                                                src='/images/startup-shape/board.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="board"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart1.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="chart1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart2.png' 
                                                                className="wow fadeInLeft"
                                                                data-wow-delay="0.6s"
                                                                alt="chart2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/check-mark.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="check-mark"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl1.png' 
                                                                className="wow bounceIn"
                                                                data-wow-delay="0.6s"
                                                                alt="girl1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl2.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="girl2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/line.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="line"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/man.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="man"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/progress.png'
                                                                className="wow rotateIn"
                                                                data-wow-delay="0.6s"
                                                                alt="progress"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/table.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="table"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/main-image.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="main-image"
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray shape-1"></div>
                        <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                        <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                        <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                        <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                        <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                        <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    </div>

                    <div className="main-banner startup-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <VisibilitySensor>
                                            {({ isVisible }) => (
                                                <>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="hero-content">
                                                            <h1
                                                                className={
                                                                    isVisible ? "animated fadeInUp" : ''
                                                                }
                                                            >
                                                                It's Time To Create Your Own Business Scheme
                                                            </h1>
                                                            <p
                                                                className={
                                                                    isVisible ? "animated zoomIn" : ''
                                                                }
                                                            >
                                                                Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.
                                                            </p>
                                                            
                                                            <Link href="/#">
                                                                <a 
                                                                    className={`
                                                                        btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                    `}
                                                                >
                                                                    Get Started
                                                                </a>
                                                            </Link>
                                                            <Link href="/#">
                                                                <a
                                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                                    className={`
                                                                        video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                    `}
                                                                > 
                                                                    Watch Video 
                                                                    <i className="icofont-play-alt-3"></i>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="col-lg-6 col-md-12">
                                                        <div 
                                                            className={`
                                                                startup-image ${isVisible ? "animated zoomIn" : ''}
                                                            `}
                                                        >
                                                            <img 
                                                                src='/images/startup-shape/board.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="board"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart1.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="chart1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/chart2.png'
                                                                className="wow fadeInLeft"
                                                                data-wow-delay="0.6s"
                                                                alt="chart2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/check-mark.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="check-mark"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl1.png'
                                                                className="wow bounceIn"
                                                                data-wow-delay="0.6s"
                                                                alt="girl1"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/girl2.png'
                                                                className="wow fadeInDown"
                                                                data-wow-delay="0.6s"
                                                                alt="girl2"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/line.png'
                                                                className="wow zoomIn"
                                                                data-wow-delay="0.6s"
                                                                alt="line"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/man.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="man"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/progress.png'
                                                                className="wow rotateIn"
                                                                data-wow-delay="0.6s"
                                                                alt="progress"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/table.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="table"
                                                            />
                                                            <img 
                                                                src='/images/startup-shape/main-image.png'
                                                                className="wow fadeInUp"
                                                                data-wow-delay="0.6s"
                                                                alt="main-image"
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray shape-1"></div>
                        <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                        <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                        <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                        <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                        <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                        <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    </div>
                </OwlCarousel> : ''}

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
                
            </>
        );
    }
}

export default Banner;
