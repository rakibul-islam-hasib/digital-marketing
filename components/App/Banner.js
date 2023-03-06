import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="main-banner app-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1>Crake Makes Your Life Very Easier</h1>
                                        <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                        
                                        <form>
                                            <input type="email" placeholder="Enter your email...." className="form-control" />
                                            <button type="submit" className="btn btn-primary">Begin Free Trial</button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="app-image">
                                        <img src='/images/app-img4.png' alt="image" />
                                        <img src='/images/app-img2.png' alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src='/images/bg3.png' alt="bg" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape1">
                    <img src='/images/shape1.png' alt="img" />
                </div>
                <div className="shape2">
                    <img src='/images/shape2.png' alt="img" />
                </div>
                <div className="shape3">
                    <img src='/images/shape3.png' alt="img" />
                </div>
                <div className="shape4 rotateme">
                    <img src='/images/shape4.png' alt="img" />
                </div>
                <div className="shape6">
                    <img src='/images/shape6.png' alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape" />
                </div>
                <div className="shape9">
                    <img src='/images/shape9.svg' alt="shape" />
                </div>
            </div>
        );
    }
}

export default Banner;
