import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    navigate("/login")
    return (
        <div>
            <Link to="/login"><h2 className='text-6xl'>Home</h2></Link>
        </div>
    );
};

export default Home;