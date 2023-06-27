import React, { useEffect, useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

const DashboardDetails = () => {
    const [dashboardInformation, setDashboardInformation] = useState([])
    var token = localStorage.getItem('access-token');
    var position = localStorage.getItem('position');
    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            headers: {
               // 'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow'
        };

        fetch("http://18.136.192.25:5000/api/v1/dashboard/statics", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setDashboardInformation(result.statics)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 m-5 justify-center items-center'>
            {
                dashboardInformation?.map(elements => <>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{elements?.total}</h2>
                            <p>{elements.title}</p>
                            <div className='inline-flex justify-center items-center gap-3'>
                                <progress className="progress w-44" value={(elements?.total * 100 / elements?.progress)} max="100"></progress>
                                <p>{Math.ceil(elements?.total * 100 / elements?.progress)} %</p>
                            </div>
                        </div>
                    </div>

                </>)
            }
            </div>

        </div>
    );
};

export default DashboardDetails;