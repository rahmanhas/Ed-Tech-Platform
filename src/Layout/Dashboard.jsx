import React from 'react';
import LeftNav from '../Component/LeftNav';
import { Outlet } from 'react-router-dom';
import TopNAv from '../Component/TopNAv';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center max-w-7xl'>
            <div className='w-[300px] h-[1024px]'>
                <LeftNav></LeftNav>
            </div>
            <div className='custom-width'>
                <TopNAv></TopNAv>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;