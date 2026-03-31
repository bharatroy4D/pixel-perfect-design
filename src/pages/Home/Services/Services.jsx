import React from 'react';
import amazon from '../../../assets/amazon.png'
import global from '../../../assets/global.png'
import ranking from '../../../assets/ranking.png'
import account from '../../../assets/acount.png'
import rocket from '../../../assets/rocket.png'
import line from '../../../assets/Line 8.png'
import baseCicle from '../../../assets/Vector (1).png'

const Services = () => {
    return (
        <div className='py-24'>
            <div className='flex items-center justify-center gap-2'>
                <img src={amazon} alt="" className='w-16' />
                <p className='text-base'>Our <span className='text-[#FFA500]'>Story</span></p>
            </div>
            <h1 className='text-center text-5xl py-3'>Scale Smarter, <span className='primary'>Sell Faster</span></h1>
            <p className='text-center text-lg'>We handle everything Amazon so you can focus on growing.</p>
            {/* services card */}
            <div className='px-25'>
                {/* card-1 */}
                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-lg primary'>Amazon Growth & Advertising</h1>
                        <img src={rocket} alt="" className='w-16' />
                    </div>
                    <img src={line} alt="" className=''/>
                    <div className='flex items-center gap-3'>
                        <img src={baseCicle} alt="" className='border border-amber-500 rounded-full p-0.5 w-4 h-4' />
                        <p className='text-base'>Bid & Budget Optimization – Higher ROI, lower ACOS.</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={baseCicle} alt="" className='border border-amber-500 rounded-full p-0.5 w-4 h-4' />
                        <p className='text-base'>Bid & Budget Optimization – Higher ROI, lower ACOS.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;