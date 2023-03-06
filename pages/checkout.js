import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Checkout/Banner';
import CheckoutBody from '../components/Checkout/CheckoutBody';

class Checkout extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <CheckoutBody />
                
                <Footer />
            </>
        );
    }
}

export default Checkout;