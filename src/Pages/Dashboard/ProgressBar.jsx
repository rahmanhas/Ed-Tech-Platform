import React from 'react';

const ProgressBar = ({data}) => {
    const x = Math.ceil(data)
    const y = 100-x;
    return (
        <div className='flex justify-between items-center w-[308px]'>
            
            <div className='h-[5px]  w-[257px] flex justify-center items-center'>
                <div className={`h-[5px] bg-[#4C6FFF]`} style={{width: `${x}%`}}></div>
                <div className={`h-[5px] bg-gray-200`} style={{width: `${y}%`}} ></div>
            </div>
            <h1 className='font-medium  text-sm text-right'>{x}%</h1>
        </div>
    );
};

export default ProgressBar;