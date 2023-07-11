import React, { useEffect, useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import i1 from '../../assets/1.svg'
import i2 from '../../assets/2.svg'
import i3 from '../../assets/3.svg'
import i4 from '../../assets/4.svg'
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
                                <div className='flex justify-start items-center gap-4'>
                                    <img className='h-12 w-12' src={elements.id === 1 ? i1 : elements.id === 2 ? i2 : elements.id === 3 ? i3 : elements.id === 4 ? i4 : ''} alt="" />
                                    <div>
                                        <h2 className="card-title font-semibold text-2xl">{elements?.total}</h2>
                                        <p className='text-sm text-[#767278]'>{elements.title}</p>
                                    </div>
                                </div>
                                <div className='inline-flex justify-center items-center gap-3 w-[200px] h-1 pt-2 rounded-2xl'>
                                    <progress className="progress progress-[#4C6FFF] w-44"  value={(elements?.total * 100 / elements?.progress)} max="100"></progress>
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