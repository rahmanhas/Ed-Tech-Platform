import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaFileMedical, FaListUl, FaSignOutAlt } from "react-icons/fa";
import logo from '../../public/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import home from '../assets/home.svg'
import addCourse from '../assets/addcourse.svg'
import user from '../assets/user.svg'
import logout from '../assets/logout.svg'
const LeftNav = () => {
    const navigate = useNavigate();
    const position = localStorage.getItem('position')
    
    const handlelogOut = event => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div className='custom-gradient min-h-[100vh] max-h-full flex flex-col text-2xl px-[25px] text-white fixed left-0'>
            <div className='flex justify-between items-center h-[83px] pl-5 pr-3'>
                <div className='flex justify-center items-center gap-5'>
                    <img className='text-white h-7 w-7' src={logo} alt="" />
                    <h1 className='font-bold text-xl leading-7 text-white'>Job Task</h1>
                </div>
                <RxHamburgerMenu></RxHamburgerMenu>
            </div>
            <div className='mt-16'>
                <NavLink
                    to="/dashboard/dashboard"
                    activeClassName="active"
                    className="p-5 flex flex-row justify-start items-center gap-5 w-[250px] h-[50px]"
                >
                    <div>

                        <img className='h-4 w-4' src={home} alt="" />
                    </div>
                    <h1 className='text-sm font-medium'>Dashboard</h1>
                </NavLink>
                <NavLink
                    to="/dashboard/courses"
                    activeClassName="active"
                    className="p-5 flex flex-row justify-start items-center gap-5 w-[250px] h-[50px]"
                >
                    <div>

                        <FaListUl className='h-4 w-4'></FaListUl>
                    </div>
                    <h1 className='text-sm font-medium'>Courses</h1>
                </NavLink>
                {
                    position ==="teacher" && <NavLink
                    to="/dashboard/addnewcourse"
                    activeClassName="active"
                    className="p-5 flex flex-row justify-start items-center gap-5 w-[250px] h-[50px]"
                >
                    <div>

                    <img className='h-4 w-4' src={addCourse} alt="" />
                    </div>
                    <h1 className='text-sm font-medium'>Add New Courses</h1>
                </NavLink>
                }
                <NavLink
                    to="/dashboard/account"
                    activeClassName="active"
                    className="p-5 flex flex-row justify-start items-center gap-5 w-[250px] h-[50px]"
                >
                    <div>

                    <img className='h-4 w-4' src={user} alt="" />
                    </div>
                    <h1 className='text-sm font-medium'>Account</h1>
                </NavLink>
                <button onClick={handlelogOut} className='p-5 flex flex-row justify-start items-center gap-5 w-[250px] h-[50px]'>
                    <div>
                    <img className='h-4 w-4' src={logout} alt="" />
                    </div>
                    <h1 className='text-sm font-medium'>Logout</h1>
                </button>
            </div>
        </div>
    );
};

export default LeftNav;