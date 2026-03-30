import React from 'react';
import logo from '../../../assets/amazon.png'

const Finters = () => {
    return (
        <div>
            <div>
                <div className='space-y-5 my-10 '>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className='w-16' />
                        <p className='text-base'>Our <span className='text-[#FFA500]'>Story</span></p>
                    </div>
                    <h1 className='text-5xl   '>Why Choose <span className='text-[#FFA500]'>FINTRIXX?</span></h1>
                    <p className='w-lg '>Amazon is complex, but success doesn’t have to be. At FINTRIXX, we help sellers increase sales, optimize ads, rank higher, and expand into new markets —without wasting time or money. 🎯 Let’s turn your struggles into scalable success!</p>

                    <div className=''>
                        <button className='text-white text-sm  py-1 px-3  rounded-full border-[#000000] border-r-2 border-b-2 bg-[#FFA500] cursor-pointer'>Book a Free Consaltation</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Finters;