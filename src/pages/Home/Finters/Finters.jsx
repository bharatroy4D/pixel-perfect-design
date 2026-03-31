import React from 'react';
import logo from '../../../assets/amazon.png'
import science from '../../../assets/Logo.svg'

const Finters = () => {
    return (
        <div className='flex items-center text-white justify-between bg-[#151515] space-y-5 px-20'>
            <div className='flex flex-col gap-4 py-12 '>
                <div className='flex items-center  gap-2'>
                    <img src={logo} alt="" className='w-16' />
                    <p className='text-base'>Our <span className='text-[#FFA500]'>Story</span></p>
                </div>
                <h1 className='text-5xl'>Why Choose <span className='text-[#FFA500]'>FINTRIXX?</span></h1>
                <p className='w-lg '>Amazon is complex, but success doesn’t have to be. At FINTRIXX, we help sellers increase sales, optimize ads, rank higher, and expand into new markets —without wasting time or money. 🎯 Let’s turn your struggles into scalable success!</p>

                <button className='text-white text-sm w-fit py-1 px-3  rounded-full border-[#000000] border-r-2 border-b-2 bg-[#FFA500] cursor-pointer'>Book a Free Consaltation</button>
            </div>
            <div>
                <img src={science} alt="" className='w-50 ' />
            </div>
        </div>
    );
};

export default Finters;