import React from 'react';
import amazon from '../../../assets/amazon.png';

const Banner = () => {
    return (
        <div className='flex flex-col bg-gradient-to-t from-[#FFA500]/50 to-[#FFFFFF] items-center justify-center gap-3 h-screen '>
            <div className='flex items-center justify-center gap-3'>
                <img src={amazon} alt="banner" className='w-16' />
                <p>Your Full-Service <span className='text-[#FFA500]'>Amazon Partner</span></p>
            </div>
            <h1 className='text-7xl w-3xl mx-auto text-center align-baseline'>Turn Your Amazon Struggles into Success—Save Time, <span className='text-[#FFA500]'>Maximize Profits!</span></h1>
            <button className='text-white text-sm py-1 px-3 ml-3 mt-2 rounded-full border-[#000000] border-r-2 border-b-2 bg-[#FFA500] cursor-pointer'>Book a Free Consaltation</button>
        </div>
    );
};

export default Banner;