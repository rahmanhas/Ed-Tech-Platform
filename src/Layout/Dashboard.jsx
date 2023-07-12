import React from 'react';
import LeftNav from '../Component/LeftNav';
import { Outlet } from 'react-router-dom';
import TopNAv from '../Component/TopNAv';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[300px] h-[1024px]'>
                <LeftNav></LeftNav>
            </div>
            <div className='custom-width'>
                <TopNAv></TopNAv>
                <div className='fixed left-[300px] top-[100px] right-0 w-[1620px]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;