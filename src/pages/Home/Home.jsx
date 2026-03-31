import React from 'react';
import Banner from './Banner/Banner';
import MarketStatices from './MarketStatices/MarketStatices';
import Finters from './Finters/Finters';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <MarketStatices />
            <Finters/>
            <Services/>
        </div>
    );
};

export default Home;