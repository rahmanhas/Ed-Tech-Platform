import React from 'react';
import searchImage from '../assets/search.svg';
import notification from '../assets/notification.svg';
import downArrow from '../assets/downarrow.svg';
import user from '../assets/user.webp';

const TopNav = () => {
    const name = localStorage.getItem('name')
    const position = localStorage.getItem('position')
  return (
    <div className='w-[1620px] bg-[#6078EA] fixed top-0 left-[300px] h-[100px] flex justify-between items-center px-[100px] py-[22px]'>
      <div className=''>
        <div
          className='h-[56px] w-[1000px] bg-[#F5F5F5] rounded-lg flex items-center pl-4'
          style={{
            backgroundImage: `url(${searchImage})`,
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '30px',
          }}
        >
          <input
            className='w-full h-full bg-[#F5F5F5] rounded-lg outline-none placeholder-[#9CA3AF]'
            type='text'
            name='search'
            placeholder='Search here...'
          />
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-3'>
          <img className='w-[16px] h-5 pt-1 ' src={notification} alt="" />
          <img className='w-[40px] h-[40px] rounded-full pt-1 ' src={user} alt="" />
          <div>
                <h1 className=' h-[22px] font-semibold text-lg text-white'>{name}</h1>
                <h1 className=' h-[17px] text-sm text-white'>{position}</h1>
          </div>
          <div className='flex justify-center items-center'>
          <img className='w-6 h-6 ' src={downArrow} alt="" />
          </div>
      </div>
    </div>
  );
};

export default TopNav;
