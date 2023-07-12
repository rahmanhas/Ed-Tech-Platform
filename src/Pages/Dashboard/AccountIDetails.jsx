import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import userImage from '../../assets/user.jpg'
import { saveUserData, saveUserDetail } from '../../utils/userActions';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';

const AccountIDetails = () => {
    //const dispatch = useDispatch();
    // const userData = useSelector(state => state.userData);
    //const userDetail = useSelector(state => state.userDetail.user_data);
    const [userInformation, setUserInformation] = useState([])

    function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);

        let age = today.getFullYear() - birthDate.getFullYear();

        // Check if the birthday hasn't occurred yet this year
        const hasBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() >= birthDate.getDate());

        // If the birthday hasn't occurred yet, subtract 1 from the age
        if (!hasBirthdayPassed) {
            age--;
        }

        return age;
    }
    useEffect(() => {
        var token = localStorage.getItem('access-token');
        var reqOps = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        };

        fetch("http://18.136.192.25:5000/api/v1/user/details", reqOps)
            .then(response => response.json())
            .then(result => {
                //console.log(result)
                // dispatch(saveUserDetail(result));
                setUserInformation(result.user_data)

            })
            .catch(error => console.log('error', error));
    }, [userInformation])
    const handleProfileUpdate = event => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const full_name = formData.get('full_name');
        const birth_date = formData.get('birth_date');
        const gender = formData.get('gender');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const cover_letter = formData.get('cover_letter');
        var token = localStorage.getItem('access-token');
        const raw = {
            full_name,
            birth_date,
            gender,
            email,
            phone,
            cover_letter
        }
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow',

        };
        fetch("http://18.136.192.25:5000/api/v1/user/details/update", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                alert(result.message)
            })
            .catch(error => console.log('error', error));
    }
    //console.log(userInformation);
    return (
        <div>
            <div className='h-[108px] px-[24px] py-[50px] flex flex-col justify-center gap-4'>
                <h1 className='h-[22px] font-semibold text-[22px] '>Discover</h1>
                <h3 className='h-[22px] text-base text-black'>{`Dashboard >`} <span className='font-medium text-[#6078EA]'>Course</span> </h3>
            </div>
            <div className='w-full flex p-5 gap-5 bg-[#f7f8fe]'>
                <div className='h-[779px] w-[496px] py-10 flex flex-col justify-center items-center bg-white '>
                    <img className='rounded-full h-[200px] w-[200px]' src={userImage} alt="user" />
                    <h1 className='font-bold text-5xl'>{userInformation?.full_name}</h1>
                    <div className='py-10'>
                        <h1>About</h1>
                        <p>{userInformation?.cover_letter}</p>
                    </div>
                    <div className='flex justify-between items-center py-10 gap-5'>
                        <div>
                            <h1>Age</h1>
                            <p>{calculateAge(userInformation?.birth_date)}</p>
                        </div>
                        <div>
                            <h1>Gender</h1>
                            <p>{userInformation?.gender}</p>
                        </div>
                    </div>
                    <div>
                        <h1>Date of Birth</h1>
                        <p>{userInformation?.birth_date}</p>
                    </div>
                </div>
                <div className='bg-[#f7f8fe] w-[994px] h-[961px] '>
                    <Form onSubmit={handleProfileUpdate} className='p-10 '>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="full_name" type="text" placeholder="" className="input input-bordered w-full max-w-xl" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input name="birth_date" type="date" placeholder="" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select name="gender" className="select select-bordered w-full max-w-xs" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Cover Letter</span>
                            </label>
                            <input type="text" name="cover_letter" placeholder="" className="input input-lg input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className='btn btn-primary my-5' value="Update" />
                    </Form>
                </div>
            </div >
        </div>
    );
};

export default AccountIDetails;