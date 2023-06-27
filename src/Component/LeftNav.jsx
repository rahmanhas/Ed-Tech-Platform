import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaFileMedical, FaListUl, FaSignOutAlt } from "react-icons/fa";
const LeftNav = () => {

    const navigate = useNavigate();
    const handlelogOut = event=>{
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div className='bg-blue-400 min-h-[100vh] max-h-full flex flex-col text-2xl p-10 text-white'>
            <Link to='/dashboard/dashboard' className='p-5 flex flex-row justify-start items-center gap-5'> 
             <div><FaHome ></FaHome> </div>  
             <h1>Dashboard</h1>
             </Link>
            
            <Link to='/dashboard/courses' className='p-5 flex flex-row justify-start items-center gap-5'> 
             <div><FaListUl></FaListUl></div>  
             <h1>Courses</h1>
             </Link>
            <Link to='/dashboard/addnewcourse' className='p-5 flex flex-row justify-start items-center gap-5'> 
             <div><FaFileMedical></FaFileMedical></div>  
             <h1>Add New Courses</h1>
             </Link>
             <Link to='/dashboard/account' className='p-5 flex flex-row justify-start items-center gap-5'> 
             <div><FaUserAlt></FaUserAlt></div>  
             <h1>Account</h1>
             </Link>
            <Link onClick={handlelogOut} className='p-5 flex flex-row justify-start items-center gap-5'> 
             <div><FaSignOutAlt></FaSignOutAlt></div>  
             <h1>Logout</h1>
             </Link>
             
             
            
        </div>
    );
};

export default LeftNav;