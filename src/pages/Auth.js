import React from 'react'
import { Outlet } from 'react-router-dom'
import Image from '../assets/together-white-transparent.png'
import SystemMessage from '../components/SystemMessage'

const Auth = () => {
  return (
    <div className='bg-slate-200 h-screen w-full flex justify-center items-center p-4'>
      <SystemMessage />
      <div className='bg-[#0074d9] rounded-xl flex flex-col-reverse md:flex-row w-full max-w-[512px] md:h-full md:max-w-[1024px] md:max-h-[640px] duration-300 min-w-[300px] overflow-hidden shadow-lg shadow-gray-300'>
        <div className='w-full min-h-[400px] md:h-full md:w-1/2 md:rounded-r-full bg-white rounded-t-[10%] overflow-hidden duration-700 p-4 flex justify-center md:justify-start md:pl-8 items-center'>
          <Outlet />
        </div>
        <div className='w-full h-1/3 min-h-[200px] md:h-full md:w-1/2 flex flex-col justify-center items-center select-none gap-2 md:gap-4 text-2xl md:text-3xl duration-300 py-8 welcome-hero-enter'>
          <p className='font-aclonica text-white'>Welcome To</p>
          <img className='w-[150px] md:w-[200px] duration-300' src={Image} alt='together-white-transparent.png'/>
        </div>
      </div>
    </div>
  )
}

export default Auth