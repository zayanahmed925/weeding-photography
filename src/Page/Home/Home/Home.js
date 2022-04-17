import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Protfolio from './Protfolio/Protfolio';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Protfolio></Protfolio>
        </div>
    );
};

export default Home;