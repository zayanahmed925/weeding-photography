import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Question from './Question/Question';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Question></Question>
        </div>
    );
};

export default Home;