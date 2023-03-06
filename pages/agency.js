import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Agency/Banner';
import Partner from '../components/Agency/Partner';
import Features from '../components/Agency/Features';
import Overview from '../components/Agency/Overview';
import Funfact from '../components/Agency/Funfact';
import SaasTools from '../components/Agency/SaasTools';
import Works from '../components/Agency/Works';
import Team from '../components/Agency/Team';
import Pricing from '../components/Agency/Pricing';
import Download from '../components/Agency/Download';
import Blog from '../components/Agency/Blog';
import CtaCard from '../components/Agency/CtaCard';
import Feedback from '../components/Agency/Feedback';
import GetStarted from '../components/Agency/GetStarted';
import Platform from '../components/Agency/Platform';

class Agency extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <Overview />
               <Funfact />
               <SaasTools />
               <Works />
               <Team />
               <Pricing />
               <Download />
               <Blog />
               <CtaCard />
               <Feedback />
               <GetStarted />
               <Platform />
               <Footer />
            </React.Fragment>
        );
    }
}

export default Agency;
