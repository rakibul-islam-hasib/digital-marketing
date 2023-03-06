import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner';
import ShopVOne from '../components/Shop/ShopVOne';

class ShopOne extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <ShopVOne />
                
                <Footer />
            </>
        );
    }
}

export default ShopOne;