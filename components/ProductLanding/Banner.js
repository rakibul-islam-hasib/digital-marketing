import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <>
                <div className="main-banner product-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1>Monitoring Your Daily Life</h1>
                                            <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                            
                                            <Link href="/contact">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>
                                            <Link href="#video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    Watch Video 
                                                    <i className="icofont-play-alt-3"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-12">
                                        <div className="product-image">
                                            <img src='/images/watch-1.png' alt="watch" />
                                            <img src='/images/watch-2.png' alt="watch" />
                                            
                                            <div className="offer-badge">
                                                50%
                                                <span>OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="creative-shape"><img src='/images/bg4.png' alt="bg" /></div>
                    <div className="bg-gray shape-1"></div>
                    <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                    <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                    <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                    <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                    <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                    <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    <div className="shape4 rotateme"><img src='/images/shape4.png' alt="img" /></div>
                </div>

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
