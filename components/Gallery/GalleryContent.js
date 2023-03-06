import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    '/images/gallery7.jpg',
    '/images/gallery8.jpg'
]

const GalleryContent = () => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <section className="gallery-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>User Gallery</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="row m-0">
                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery1.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(0);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery2.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(1);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery3.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(2);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery4.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(3);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery5.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(4);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery6.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => {setIsOpenImage(true); setPhotoIndex(5);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery7.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(6);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery8.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(7);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryContent;
