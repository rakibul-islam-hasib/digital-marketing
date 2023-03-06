import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Faq/Banner';
import FaqContent from '../components/Faq/FaqContent';
import AskForm from '../components/Faq/AskForm';

class Faq extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <Banner />

                <section className="faq-area ptb-100">
			        <div className="container">

                        <FaqContent /> 

                        <AskForm />
                        
                    </div>
		        </section>

                <Footer />
            </>
        );
    }
}

export default Faq;
