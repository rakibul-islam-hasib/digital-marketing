import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Services/Banner';
import ServiceContent from '../components/Services/ServiceContent';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Loader from '../components/Shared/Loader'; 

class Services extends Component {
    render() {
        return (
            <Preloader>
                <Navbar />
                    <Banner />
                    <ServiceContent />
                    <Footer />
                    <Placeholder>
                    <Loader />
                </Placeholder>
            </Preloader>
        );
    }
}

export default Services;
