import React, { Component } from 'react';
import Link from 'next/link';

class LoginBody extends Component {
    render() {
        return (
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src='/images/marketing.png' alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h3>Welcome Back!</h3>
                                <p>Please login to your account.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkme" />
                                                <label className="form-check-label" htmlFor="checkme">Keep me Login</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 text-right">
                                            <p className="forgot-password">
                                                <Link href="#"><a>Forgot Password?</a></Link>
                                            </p>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary">Login Now!</button>
                                            <br />
                                            <span>New User? <Link href="/signup"><a>Sign Up!</a></Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginBody;
