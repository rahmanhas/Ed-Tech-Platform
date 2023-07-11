import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import tick from '../../assets/tick.png'
import { FaCheck } from "react-icons/fa";
import thanks from '../../assets/thanks.svg'
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
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setStepCount(stepCount + 1);
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            {/* <div className='flex justify-center'>
                <ul className="steps">
                    <li className={`${stepCount > 0 ? 'step step-primary' : "step"}`}>Information</li>
                    <li className={`${stepCount > 2 ? 'step step-primary' : "step"}`}>Security</li>
                    <li className={`${stepCount > 3 ? 'step step-primary' : "step"}`}>Confirmation</li>
                </ul>
            </div> */}
            <div className='flex justify-center items-center gap-8 mt-28'>
                <div className='flex justify-center items-center gap-2 w-[312px]'>
                    <h1 className='font-semibold text-lg text-white bg-[#6078ea] rounded-full h-12 w-12 flex justify-center items-center border-[#6078ea]'>
                        {stepCount > 2 ? <FaCheck></FaCheck> : 1}

                    </h1>
                    <p className='border-[1px] h-[2px] bg-[#6078ea] w-28 border-[#6078ea]'></p>
                    <p className={`font-medium text-2xl ${stepCount > 2 ? 'text-[#6078ea]' : 'text-black'} h-9 w-32`}>Information</p>
                </div>
                <div className='flex justify-center items-center gap-2 w-[312px]'>
                    <h1 className='font-semibold text-lg text-white bg-[#6078ea] rounded-full h-12 w-12 flex justify-center items-center border-[#6078ea]'>
                        {stepCount > 3 ? <FaCheck></FaCheck> : 2}

                    </h1>
                    <p className='border-[1px] h-[2px] bg-[#6078ea] w-28 border-[#6078ea]'></p>
                    <p className={`font-medium text-2xl ${stepCount > 3 ? 'text-[#6078ea]' : 'text-black'} h-9 w-32`}>Security</p>
                </div>
                <div className='flex justify-center items-center gap-2 w-[312px]'>
                    <h1 className='font-semibold text-lg text-white bg-[#6078ea] rounded-full h-12 w-12 flex justify-center items-center border-[#6078ea]'>3</h1>
                    <p className='border-[1px] h-[2px] bg-[#6078ea] w-28 border-[#6078ea]'></p>
                    <p className='font-medium text-2xl text-black h-9 w-32'>Confirmation</p>
                </div>
            </div>

            <div className=" flex justify-center items-start mt-5 min-h-screen bg-base-100">
                <div className="flex flex-col ">
                    <div className="text-center mt-5">
                        <h1 className={`${stepCount > 2 ? 'hidden' : "text-5xl font-bold"}`}>Personal Information</h1>
                        <h1 className={`${stepCount == 3 ? 'text-5xl font-bold' : "hidden"}`}>Security</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
                        <Form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                    <div className='flex flex-col items-start'>
                                        <label className="label">
                                            <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Full Name</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <input type="text" placeholder="Enter Full Name" name="full_name" className="input w-800 h-[72px] border-1 border-black" required />
                                    </div>
                                </div>
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                    <div className='flex flex-col items-start'>
                                        <label className="label">
                                            <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Email Address</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <input type="email" placeholder="Enter Email Address" name="email" className="input w-800 h-[72px] border-1 border-black" required />
                                    </div>
                                </div>
                                <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                    <div className='flex flex-col items-start'>
                                        <label className="label">
                                            <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Position</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <select onChange={(e) => setPosition(e.target.value)} name="position" className="select w-800 h-[72px] border-1 border-black" required>
                                            <option>--</option>
                                            <option>teacher</option>
                                            <option>student</option>
                                        </select>
                                    </div>
                                </div>

                                {stepCount > 0 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                        <div className='flex flex-col items-start'>
                                            <label className="label">
                                                <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Institute Name</span>
                                            </label>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <select name="institution_name" className="select w-800 h-[72px] border-1 border-black" required>

                                                <option>Dhaka National Medical College</option>
                                                <option>Ibrahim Medical College</option>
                                                <option>Bangladesh Medical College</option>
                                                <option>Holy Family Red Crescent Medical College</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                {position === "student" && stepCount > 1 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                        <div className='flex flex-col items-start'>
                                            <label className="label">
                                                <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Education Level</span>
                                            </label>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <select name="education_level" className="select w-800 h-[72px] border-1 border-black" required>

                                                <option>Secondary School Certificate (SSC)</option>
                                                <option>Higher Secondary School Certificate (HSC)</option>
                                                <option>Diploma</option>
                                                <option>Bachelor of Science (BSC)</option>
                                                <option>Masters of Arts (MA)</option>
                                                <option>Bachelor of Arts (BA)</option>
                                            </select>
                                        </div>
                                    </div>

                                }
                                {position === "teacher" && stepCount > 1 &&
                                    <div className={`${stepCount > 2 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                        <div className='flex flex-col items-start'>
                                            <label className="label">
                                                <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Select Work Time</span>
                                            </label>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <select name="work_time" className="select w-800 h-[72px] border-1 border-black" required>
                                                <option value="full_time">Full Time</option>
                                                <option value="part_time">Part Time</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                {stepCount > 2 &&
                                    <div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                            <div className='flex flex-col items-start'>
                                                <label className="label">
                                                    <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Password</span>
                                                </label>
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <input onChange={e => setPass(e.target.value)} type="password" placeholder="Enter New Password" name="password" className="input w-800 h-[72px] border-1 border-black" required />
                                            </div>
                                        </div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control flex justify-center items-center"}`}>
                                            <div className='flex flex-col items-start'>
                                                <label className="label">
                                                    <span className="label-text font-medium text-2xl w-800 px-1 h-7 pb-10">Confirm Password</span>
                                                </label>
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <input onChange={e => setCPass(e.target.value)} type="password" placeholder="Re-type New Password" name="confirm_password" className="input w-800 h-[72px] border-1 border-black" required />
                                            </div>
                                        </div>
                                        <div className={`${stepCount > 3 ? 'hidden form-control' : "form-control mt-6 flex justify-center"}`}>
                                            <label className='label flex flex-col text-center'>
                                                <input className='btn hover:bg-[#6078ea] bg-[#6078ea] w-800 text-white capitalize text-2xl py-4 flex items-center px-6 h-[77px] mt-7' type="submit" value="Confirm" disabled={pass !== cPass} />
                                            </label>
                                        </div>
                                    </div>
                                }
                                {
                                    <div className={`${stepCount > 3 ? 'flex flex-col justify-center items-center' : "hidden"}`}>
                                        <div className='h-64 w-64 bg-blue-200 rounded-full'>
                                            <img src={thanks} alt="" />
                                        </div>
                                        <h1 className='font-semibold text-4xl mt-10 text-center'> Thank You!</h1>
                                        <p className='mt-5 text-2xl leading-8 text-[#9F9F9F] text-center w-[485px]'> Account has been created. Enjoy Job Task</p>
                                        <Link to="/"><button className='btn btn-outline border-[#6078ea] text-[#6078ea] border-2 hover:bg-[#6078ea] normal-case text-2xl font-semibold leading-8 w-[350px] h-[77px] text-center mt-16'>Go to Home</button></Link>
                                    </div>
                                }
                                <div className='flex justify-center'>
                                    <button onClick={handleStep} type="button" className={`${stepCount > 2 ? 'hidden' : "btn hover:bg-[#6078ea] bg-[#6078ea] w-800 text-white capitalize text-2xl py-4 flex items-center px-6 h-[77px] mt-7"}`}>Next</button>
                                </div>
                                <div className={`${stepCount > 3 ? 'hidden' : "flex justify-center"}`}>
                                    <div className=''>
                                        <label className="label flex flex-col text-center">
                                            <p className='text-2xl font-semibold w-800'>Already Have an Account? <Link to='/login'><span className='text-[#6078ea] underline'>Log In</span></Link></p>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;