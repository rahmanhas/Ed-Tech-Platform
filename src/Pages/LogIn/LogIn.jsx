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
                    <h1 className="text-5xl font-bold">Welcome To Task job</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
                    <Form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address*</span>
                                </label>
                                <input type="email" placeholder="Enter Email Address" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" placeholder="Enter Password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Log In" />
                            </div>
                            <label className="label">

                                <p>Do not Have an Account? <Link to='/signup'>Register Now</Link></p>
                            </label>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;