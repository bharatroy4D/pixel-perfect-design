import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='oswald'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;