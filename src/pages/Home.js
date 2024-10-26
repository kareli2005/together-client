import React from 'react'
import { Outlet } from 'react-router-dom'
import SystemMessage from '../components/SystemMessage'
import SideBar from '../components/SideBar'
import MobileNavBar from '../components/MobileNavBar'

const Home = () => {
  return (
    <div className='bg-slate-200 h-screen w-full flex justify-center items-center pt-4 pl-4 pr-4 md:p-4 overflow-hidden'>
      <SystemMessage />
      <div className='flex flex-col md:flex-row w-full max-w-[512px] h-full md:w-[1024px] md:h-[640px] md:max-w-[1024px] duration-300 min-w-[300px] gap-2 md:gap-4'>
        <SideBar/>
        <Outlet/>
        <MobileNavBar/>
      </div>
    </div>
  )
}

export default Home
