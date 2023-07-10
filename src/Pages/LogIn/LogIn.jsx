import React from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserData, saveUserDetail } from '../../utils/userActions';



const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        var raw = JSON.stringify({
            email: email,
            password: password
        });
        console.log(raw);
        var requestOptions = {
            method: 'POST',
            body: raw,
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("http://18.136.192.25:5000/api/v1/user/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const token = result.data.token
                const position = result.data.position
                localStorage.setItem('access-token', token);
                localStorage.setItem('position', position);
                dispatch(saveUserData(result.data));

                navigate("/dashboard/dashboard")

            })
            .catch(error => console.log('error', error));

    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Welcome To Task Job</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
                    <Form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control flex justify-center items-center ">
                                <div className='flex flex-col items-start'>
                                    <label className="label">
                                        <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Email Address*</span>
                                    </label>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <input type="email" placeholder="Enter Email Address" name="email" className="input input-bordered w-800 h-[72px]" required />
                                </div>
                            </div>
                            <div className="form-control flex justify-center items-center">
                                <div className='flex flex-col items-start'>
                                    <label className="label">
                                        <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Password*</span>
                                    </label>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <input type="password" placeholder="Enter Password" name="password" className="input input-bordered w-800 h-[72px]" required />
                                </div>

                            </div>
                            <div className="form-control mt-6 flex flex-col items-center">
                                <input className='btn hover:bg-[#6078ea] bg-[#6078ea] w-800 text-white capitalize text-2xl py-4 flex jus items-center px-6 h-[77px]' type="submit" value="Log In" />
                            </div>
                            <div className=''>
                                <label className="label flex flex-col text-center">
                                    <p className='text-2xl font-semibold w-800'>Don't Have an Account? <Link to='/signup'><span className='text-[#6078ea] underline'>Register Now</span></Link></p>
                                </label>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;