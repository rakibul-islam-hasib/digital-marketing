import React from 'react'
import Link from 'next/link'
import Banner from '../components/Error/Banner'

const ErrorPage = () => {
    return (
        <>
            <Banner />
            
            <section className="error-area ptb-100">
                <div className="container">
                    <div className="notfound">
                        <div className="notfound-404"></div>
                        <h2>404</h2>
                        <span>Oops!! Page not be Found</span>
                        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                        <Link href="/">
                            <a className="btn btn-primary">Back To Homepage</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorPage
