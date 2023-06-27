import React, { useEffect, useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import userImage from '../../assets/user.jpg'
import { FaExpandArrowsAlt, FaShoppingCart } from "react-icons/fa";
const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState({})
    const [isOverviewActive, setIsOverviewActive] = useState(true);
    const [isCurriculumActive, setIsCurriculumActive] = useState(false);
    const navigate = useNavigate()
    const handleOverviewClick = () => {
        setIsOverviewActive(true);
        setIsCurriculumActive(false);
    };

    const handleCurriculumClick = () => {
        setIsOverviewActive(false);
        setIsCurriculumActive(true);
    };
    const course_id = useParams().id
    // console.log(courseId);

    var token = localStorage.getItem('access-token');


    useEffect(() => {
        const raw = { course_id }
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow'
        };
        fetch("http://18.136.192.25:5000/api/v1/course/details", requestOptions)
            .then(response => response.json())
            .then(result => {

                setCourseDetails(result.send_res)
            })
            .catch(error => console.log('error', error));
    }, [])
    console.log(courseDetails);

    const handleSubmitReview = (event) => {
        event.preventDefault()
        const course_id = courseDetails.course_id;
        const comment = event.target.comment.value;
        const raw = { course_id, comment }
        console.log(raw);
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };
        fetch("http://18.136.192.25:5000/api/v1/course/comment/add", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    const handleCourseBuy = event =>{
        alert("Thank you for purchasing")
        navigate("/dashboard")
    }

    return (
        <div className='w-full flex justify-between items-start gap-5'>
            <div className='w-4/5 p-5'>
                <img src={courseDetails?.main_course_file} alt="" className='' />
                <h1 className='text-4xl font-bold uppercase py-3'>{courseDetails?.lesson_name}</h1>
                <p className='text-xl text-gray-500 py-3'>By <span className='text-black'>{courseDetails?.teacher_info?.full_name}</span></p>
                <div className='inline-flex gap-2 justify-center items-center py-3'>
                    <img className='h-10 rounded-full' src={userImage} alt="" />
                    <p className='text-black text-xl'>{courseDetails?.teacher_info?.full_name}</p>
                </div>
                <div className='flex gap-5 justify-start items-center py-3'>
                    <button
                        className={`btn ${isOverviewActive ? 'btn-warning active' : 'btn'}`}
                        onClick={handleOverviewClick}
                    >
                        <span className={isOverviewActive ? 'text-white' : 'text-black'}>Overview</span>
                    </button>
                    <button
                        className={`btn ${isCurriculumActive ? 'btn-warning active' : 'btn'}`}
                        onClick={handleCurriculumClick}
                    >
                        <span className={isCurriculumActive ? 'text-white' : 'text-black'}>Curriculum</span>
                    </button>
                </div>
                <div className='py-3'>
                    <h2 className='text-xl text-black'>{courseDetails?.description}</h2>
                </div>
                <div className='py-5'>
                    <h1 className='text-xl text-black'>Reviews</h1>
                    <div>
                        {
                            courseDetails?.comment_info?.map(comment => <>
                                <div className='flex justify-start items-start gap-3 py-3 text-black border rounded-2xl px-4 my-3'>
                                    <img className='h-[40px] rounded-full' src={userImage} alt="" />
                                    <div className='text-xl'>
                                        <h1 className=''>{comment?.user_info?.full_name}</h1>
                                        <p>{comment?.created_at}</p>
                                        <p className='py-3'>{comment?.comment}</p>
                                    </div>
                                </div>

                            </>)
                        }
                    </div>

                    <div>
                        <h1 className='text-xl text-black my-3'>Leave a Comment</h1>
                        <Form onSubmit={handleSubmitReview}>
                            <input type="text" name="comment" id="comment" className='input input-bordered input-lg w-full mt-3' />
                            <input className='btn btn-primary my-3' type="submit" value="Publish Review" />
                        </Form>
                    </div>
                </div>
            </div>
            <div className='w-1/5'>
                <h1 className='text-xl font-bold py-3'>Tags</h1>
                <button className='btn ' disabled="disabled"><span className='text-white'>{courseDetails?.tags}</span> <FaExpandArrowsAlt></FaExpandArrowsAlt> </button>
                <p className='font-bold py-3'>what you will learn</p>
                <p className='py-3'>{courseDetails?.lesson_name}</p>
                <p className='bg-pink-200 mx-5 rounded-lg p-5 text-center text-2xl'>${courseDetails?.price}</p>
                <button onClick={handleCourseBuy} className='btn btn-primary m-5 p-5 text-center inline-flex justify-center items-center'> <FaShoppingCart></FaShoppingCart> Buy Now</button>
            </div>
        </div>
    );
};

export default CourseDetails;