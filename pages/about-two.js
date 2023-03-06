import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/About/Banner';
import CtaCard from '../components/About/CtaCard';
import Partner from '../components/About/Partner';
import Platform from '../components/About/Platform';
import AboutContentTwo from '../components/About/AboutContentTwo';
import TeamTwo from '../components/About/TeamTwo';
import FeedbackTwo from '../components/About/FeedbackTwo';

class AboutTwo extends React.Component {
    render() {
        return (
            <>
               <Navbar />

               <Banner />

               <AboutContentTwo />

               <TeamTwo />

               <CtaCard />

               <FeedbackTwo />

               <Partner />

               <Platform />
               
               <Footer />
            </>
        );
    }
}

export default AboutTwo;
