import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Blog/Banner';
import BlogOne from '../components/Blog/BlogOne';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <BlogOne />
                
                <Footer />
            </>
        );
    }
}

export default Blog;