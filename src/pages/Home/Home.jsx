import React from 'react';
import Banner from './Banner/Banner';
import MarketStatices from './MarketStatices/MarketStatices';
import Finters from './Finters/Finters';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <MarketStatices />
            <Finters/>
        </div>
    );
};

export default Home;