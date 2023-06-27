import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import tick from '../../assets/tick.png'

const SignUp = () => {
    const [stepCount, setStepCount] = useState(0);
    const [position, setPosition] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");
    console.log(stepCount);
    const handleStep = () => {

        setStepCount(stepCount + 1);
        if (stepCount > 3) {
            setStepCount(4)
        }
        console.log(stepCount);
    }
    const handleSubmit = event => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const full_name = formData.get('full_name');
        const email = formData.get('email');
        const position = formData.get('position');
        const institution_name = formData.get('institution_name');
        const education_level = formData.get('education_level');
        const work_time = formData.get('work_time');
        const password = formData.get('password');
        const confirm_password = formData.get('confirm_password');
        const studentProfile = {
            full_name,
            email,
            position,
            institution_name,
            education_level,
            password,
            confirm_password
        }
        const teacherProfile = {
            full_name,
            email,
            position,
            institution_name,
            work_time,
            password,
            confirm_password
        }

        if (position === "Teacher") {
            console.log(teacherProfile);
        } else {
            console.log(studentProfile);
        }
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(position === 'teacher' ? teacherProfile : studentProfile),
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
        };

        fetch("http://18.136.192.25:5000/api/v1/user/register", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                setStepCount(stepCount + 1);
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <div className='flex justify-center mt-5'>
                <ul className="steps">
                    <li className={`${stepCount > 0 ? 'step step-primary' : "step"}`}>Information</li>
                    <li className={`${stepCount > 2 ? 'step step-primary' : "step"}`}>Security</li>
                    <li className={`${stepCount > 3 ? 'step step-primary' : "step"}`}>Confirmation</li>
                </ul>
            </div>

            <div className=" flex justify-center items-start mt-5 min-h-screen bg-base-100">
                <div className="flex flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className={`${stepCount > 2 ? 'hidden' : "text-5xl font-bold"}`}>Personal Information</h1>
                        <h1 className={`${stepCount == 3 ? 'text-5xl font-bold' : "hidden"}`}>Security</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
                        <Form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Full Name" name="full_name" className="input input-bordered" required />
                                </div>
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="email" placeholder="Enter Email Address" name="email" className="input input-bordered" required />
                                </div>
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                    <label className="label">
                                        <span className="label-text">Position</span>
                                    </label>
                                    <select onChange={(e) => setPosition(e.target.value)} name="position" className="select select-bordered w-full max-w-xs" required>
                                        <option>--</option>
                                        <option>teacher</option>
                                        <option>student</option>
                                    </select>
                                </div>
                                {stepCount > 0 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                        <label className="label">
                                            <span className="label-text">Institute Name</span>
                                        </label>
                                        <select name="institution_name" className="select select-bordered w-full max-w-xs" required>
                                            <option>Dhaka National Medical College</option>
                                            <option>Ibrahim Medical College</option>
                                            <option>Bangladesh Medical College</option>
                                            <option>Holy Family Red Crescent Medical College</option>

                                        </select>
                                    </div>}
                                {position === "student" && stepCount > 1 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                        <label className="label">
                                            <span className="label-text">Education Level</span>
                                        </label>
                                        <select name="education_level" className="select select-bordered w-full max-w-xs" required>
                                            <option>Secondary School Certificate (SSC)</option>
                                            <option>Higher Secondary School Certificate (HSC)</option>
                                            <option>Diploma</option>
                                            <option>Bachelor of Science (BSC)</option>
                                            <option>Masters of Arts (MA)</option>
                                            <option>Bachelor of Arts (BA)</option>
                                        </select>
                                    </div>
                                }
                                {position === "teacher" && stepCount > 1 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control"}`}>
                                        <label className="label">
                                            <span className="label-text">Select Work Time</span>
                                        </label>
                                        <select name="work_time" className="select select-bordered w-full max-w-xs" required>
                                            <option value="full_time">Full Time</option>
                                            <option value="part_time">Part Time</option>

                                        </select>
                                    </div>
                                }
                                {stepCount > 2 &&
                                    <div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control"}`}>
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input onChange={e => setPass(e.target.value)} type="password" placeholder="Enter Password" name="password" className="input input-bordered" required />

                                        </div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control"}`}>
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input onChange={e => setCPass(e.target.value)} type="password" placeholder="Confirm Password" name="confirm_password" className="input input-bordered" required />

                                        </div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control mt-6"}`}>
                                            <input className='btn btn-primary' type="submit" value="Confirm" disabled={pass !== cPass} />
                                        </div>
                                    </div>
                                }
                                {
                                    <div className={`${stepCount > 3 ? '' : "hidden"}`}>
                                        <img src={tick} alt="" />
                                        <h1 className='font-bold text-6xl my-10 text-center'> Thank You!</h1>
                                        <p className='text-3xl mt-5 text-gray-500 text-center'> Account has been created. Enjoy Job Task</p>
                                    </div>
                                }
                                <div className='flex justify-center'>
                                    <button onClick={handleStep} className={`${stepCount > 2 ? 'hidden' : "btn btn-primary"}`}>Next</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <div className={`${stepCount > 2 ? 'hidden' : "flex justify-center"}`}>
                <label className="label">

                    <p className='text-center'>Already Have an Account? <span className='text-primary underline'>Log In</span></p>
                </label>
            </div>
        </div>
    );
};

export default SignUp;