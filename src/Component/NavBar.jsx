import React from 'react';
 import logo from '../../public/vite.svg'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100  border flex justify-start gap-3 items-center">
            <img className='h-6 w-6' src={logo} alt="" />
            <h1 className='text-[#6078ea] text-2xl font-bold'>Job Task</h1>
        </div>
    );
};

export default NavBar;