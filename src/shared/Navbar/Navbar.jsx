import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const links = [
    { id: "1", link: "Services", path: "/services" },
    { id: "2", link: "About", path: "/about" },
    { id: "3", link: "Contact", path: "/contact" }
]
const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-5 py-3 mx-auto' >
            <img src={logo} className='w-6 text-[#FFA500]' alt="logo" />
            <div className='flex items-center gap-4 '>
                {links.map(item => (
                    <Link key={item.id} to={item.path} className='text-base font-normal text-[#4F4D4D]'>{item.link}</Link>
                ))}
                <button className='text-white text-sm py-1 px-3 ml-3 rounded-full border-[#000000] border-r-2 border-b-2 bg-[#FFA500]'>Book a Free Consaltation</button>
            </div>
        </div>
    );
};

export default Navbar;