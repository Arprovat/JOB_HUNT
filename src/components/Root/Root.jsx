import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navber';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Root;