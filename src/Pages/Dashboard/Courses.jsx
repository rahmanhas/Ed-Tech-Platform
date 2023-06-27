import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const raw = {
        "perpage": 10,
        "page": 1
    }
    var token = localStorage.getItem('access-token');
    var requestOptions = {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: raw,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://18.136.192.25:5000/api/v1/course/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                //console.log(result)
                setCourses(result.send_res)
            })
            .catch(error => console.log('error', error));
    }, [])
    console.log(courses);
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 p-10'>
            {
                courses.map(course => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-36 rounded-xl' src={course?.main_course_file} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course?.lesson_name}</h2>
                            <p>{course?.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/dashboard/courses/${course?.id}`}><button className="btn btn-primary">$ {course?.price}</button></Link>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Courses;