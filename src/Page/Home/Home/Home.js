import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Question from './Question/Question';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Question></Question>
            <Footer></Footer>
        </div>
    );
};

export default Home;