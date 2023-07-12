import React, { useEffect, useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import i1 from '../../assets/1.svg'
import i2 from '../../assets/2.svg'
import i3 from '../../assets/3.svg'
import i4 from '../../assets/4.svg'
import arrow from '../../assets/arrow.svg'
import ProgressBar from './ProgressBar';

const DashboardDetails = () => {
    const [dashboardInformation, setDashboardInformation] = useState([])
    const [dashboardGraphInformation, setDashboardGraphInformation] = useState([])
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
                setDashboardInformation(result.statics)
            })
            .catch(error => console.log('error', error));
    }, [])
    useEffect(() => {
        const time_period = "monthly"
        var raw = {
            time_period
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(raw),
            redirect: 'follow',
        };

        fetch("http://18.136.192.25:5000/api/v1/dashboard/chart", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setDashboardGraphInformation(result.progress)
            })
            .catch(error => console.log('error', error));
    }, [])


    return (
        <div className='w-[1620px] flex justify-center items-start mt-[45px] gap-8 mx-auto'>
            {
                dashboardInformation?.map(elements => <>
                    <div className="card w-[358px] gap-2 h-[200px] bg-base-100 " style={{boxShadow: `2px 4px 16px rgba(0, 0, 0, 0.16)`}}>
                        <div className="card-body justify-between">
                            <div className='flex justify-start items-center gap-4 mb-10'>
                                <img className='h-12 w-12' src={elements.id === 1 ? i1 : elements.id === 2 ? i2 : elements.id === 3 ? i3 : elements.id === 4 ? i4 : ''} alt="" />
                                <div>
                                    <h2 className="card-title font-semibold text-2xl">{elements?.total}</h2>
                                    <p className='text-sm text-[#767278]'>{elements.title}</p>
                                </div>
                            </div>
                            <div>

                                { elements.progress >0 &&
                                    <ProgressBar data={elements?.total * 100 / elements?.progress} ></ProgressBar>
                                }
                                { elements.progress === '' &&
                                    <div className='flex justify-start items-center gap-5'>
                                        <h1 className='font-medium text-sm text-[#4C6FFF]'>View Courses</h1>
                                        <img className='w-[11px] h-[6px]' src={arrow} alt="" />
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>


    );
};

export default DashboardDetails;