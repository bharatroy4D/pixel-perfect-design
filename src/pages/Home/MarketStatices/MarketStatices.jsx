import React from 'react';
import amazon from '../../../assets/amazon.png'

const MarketStatices = () => {
    return (
        <div className='pt-15'>
            <h1 className='text-2xl text-center text-[#151515]'>Amazon Market Statistics Worldwide 2024</h1>
            {/* counter container */}
            <div className='flex items-center justify-between px-28 py-8'>
                {/* card-1 */}
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl'>600 million</h1>
                    <p className='text-lg text-[#4F4D4D]'>Amazon Offers Over Products</p>
                </div>
                {/* card-2 */}
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl'>$638.0 billion</h1>
                    <p className='text-lg text-[#4F4D4D]'>Amazon Global Net Sales Revenue</p>
                </div>
                {/* card-3 */}
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl'>11.95 million </h1>
                    <p className='text-lg text-[#4F4D4D]'>Amazon Handles Orders Daily.</p>
                </div>
                {/* card-4 */}
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl'>$1.6 billion</h1>
                    <p className='text-lg text-[#4F4D4D]'>Amazon Average Daily Sales Revenue</p>
                </div>
            </div>
            {/* story content */}
            <div className='space-y-5 '>
                <div className='flex items-center justify-center gap-2'>
                    <img src={amazon} alt="" className='w-16' />
                    <p className='text-base'>Our <span className='text-[#FFA500]'>Story</span></p>
                </div>
                <h1 className='text-4xl w-3xl text-center mx-auto px-5 '>Struggling With Amazon Sales? Let’s Scale Your Business—Faster, Smarter, & Stress-Free!</h1>
                <p className='w-lg px-6 text-base text-center mx-auto'>Amazon is complex, but success doesn’t have to be. At FINTRIXX, we help sellers increase sales, optimize ads, rank higher, and expand into new markets —without wasting time or money. 🎯 Let’s turn your struggles into scalable success!</p>
            </div>
        </div>
    );
};

export default MarketStatices;