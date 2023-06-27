import React from 'react';
import LeftNav from '../Component/LeftNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-1/5'>
            <LeftNav></LeftNav>
            </div>
            <div className='w-4/5'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;