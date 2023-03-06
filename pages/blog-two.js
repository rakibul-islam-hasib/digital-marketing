import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Blog/Banner';
import BlogTwo from '../components/Blog/BlogTwo';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <Banner />

                <BlogTwo />
                
                <Footer />
            </>
        );
    }
}

export default Blog;