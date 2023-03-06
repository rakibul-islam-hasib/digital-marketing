import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/BookLanding/Banner';
import Partner from '../components/BookLanding/Partner';
import Discover from '../components/BookLanding/Discover';
import Features from '../components/BookLanding/Features';
import Funfact from '../components/BookLanding/Funfact';
import Screenshot from '../components/BookLanding/Screenshot';
import Team from '../components/BookLanding/Team';
import Pricing from '../components/BookLanding/Pricing';
import Feedback from '../components/BookLanding/Feedback';
import Blog from '../components/BookLanding/Blog';
import Platform from '../components/BookLanding/Platform';
import Subscribe from '../components/BookLanding/Subscribe';

class BookLanding extends React.Component {
    render() {
        return (
            <>
               <Navbar />

               <Banner />

               <Partner />

               <Discover />

               <Features />

               <Funfact />

               <Screenshot />

               <Team />

               <Pricing />

               <Feedback />

               <Blog />

               <Subscribe />

               <Platform />
               
               <Footer />
            </>
        );
    }
}

export default BookLanding;
