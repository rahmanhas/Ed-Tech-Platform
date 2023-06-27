import React from 'react';
import { Form } from 'react-router-dom';

const AddNewCourse = () => {
    const handleSubmit = event => {
        event.preventDefault()
        var formData = new FormData();
        const main_course_file_input = document.getElementById('main_course_file');
        const thumbnail_file_input = document.getElementById('thumbnail_file');
        const introduction_file_input = document.getElementById('introduction_file');
        
        formData.append("main_course_file", main_course_file_input.files[0], event.target.main_course_file.files[0].name);

        formData.append("thumbnail_file", thumbnail_file_input.files[0], event.target.thumbnail_file.files[0].name);
        formData.append("introduction_file", introduction_file_input.files[0], event.target.introduction_file.files[0].name);
        formData.append("tags", event.target.tags.value);
        formData.append("lesson_name", event.target.lesson_name.value);
        formData.append("description", event.target.description.value);
        formData.append("price", event.target.price.value);
        var token = localStorage.getItem('access-token');
        var requestOptions = {
            method: 'POST',
            body: formData,
            headers: {
                //'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow',
            mode: 'cors'
            
        };
        fetch("http://18.136.192.25:5000/api/v1/course/create", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                alert(result.message)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <h1 className='font-bold text-3xl p-5'>Add New Course</h1>
            <Form onSubmit={handleSubmit}>
                <div className='flex '>
                    <div className="card-body">
                        <h1 className='font-bold text-6xl'>File Upload</h1>
                        <div className="form-control py-5">
                            <label className="label">
                                <span className="label-text text-2xl">Main Course File</span>
                            </label>
                            <input id='main_course_file' type="file" name="main_course_file" className="file-input w-full max-w-xs" />
                        </div>
                        <div className="form-control py-5">
                            <label className="label">
                                <span className="label-text text-2xl">Thumbnail File</span>
                            </label>
                            <input id='thumbnail_file' type="file" name="thumbnail_file" className="file-input w-full max-w-xs" />
                        </div>
                        <div className="form-control py-5">
                            <label className="label">
                                <span className="label-text text-2xl">Introduction File</span>
                            </label>
                            <input id='introduction_file' type="file" name="introduction_file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h1 className='font-bold text-6xl'>Other Information</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Tags</span>
                            </label>
                            <input type="text" name="tags" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Lesson Name</span>
                            </label>
                            <input type="text" name="lesson_name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Description</span>
                            </label>
                            <input type="text" name="description" className="input input-lg input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Price</span>
                            </label>

                            <input min={0} type="number" name="price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </div>
            </Form>
        </div>
    );
};

export default AddNewCourse;