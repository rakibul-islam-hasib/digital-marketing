import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/PaymentProcessing/Banner';
import Boxes from '../components/PaymentProcessing/Boxes';
import Features from '../components/PaymentProcessing/Features';
import WorkProcess from '../components/PaymentProcessing/WorkProcess';
import Services from '../components/PaymentProcessing/Services';
import Overview from '../components/PaymentProcessing/Overview';
import CtaCard from '../components/PaymentProcessing/CtaCard';
import GetStarted from '../components/PaymentProcessing/GetStarted';
import Platform from '../components/PaymentProcessing/Platform';
import Team from '../components/PaymentProcessing/Team';
import Partner from '../components/PaymentProcessing/Partner';

class HomeSeven extends React.Component {
    render() {
        return (
            <>
               <Navbar />
               <Banner />
               <Boxes />
               <Features />
               <WorkProcess />
               <Services />
               <Overview />
               <CtaCard />
               <GetStarted />
               <Platform />
               <Team />
               <Partner />
               <Footer />
            </>
        );
    }
}

export default HomeSeven;
