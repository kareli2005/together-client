import React, { useEffect, useState } from 'react'
import Logo from '../assets/together-blue-transparent.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { homeRoutes } from '../Routes';
// Material Ui
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';


const SideBar = () => {

  const [pathname, setPathname] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  return (
    <div className='hidden md:flex flex-col bg-white rounded-lg py-4 px-6 w-full gap-8 max-w-[220px] sidebar-enter shadow-lg shadow-gray-300'>
      <img src={Logo} alt='together-blue-transparent.png' className='w-full' />
      
      <div className='flex flex-col gap-4'>
        <button onClick={() => navigate(homeRoutes.homePage)} className={`${pathname === homeRoutes.homePage? 'bg-[#0074d9] border-[#0074d9] text-white' : 'bg-white border-[#0074d9] text-[#0074d9] hover:pl-8'} duration-300 border-2 rounded-xl px-3 py-2 font-bold w-full select-none flex justify-start items-center gap-2 shadow-md shadow-gray-300`} >
          <ChatIcon/>
          <p>Chats</p>
        </button>
        <button onClick={() => navigate(homeRoutes.search)} className={`${pathname === homeRoutes.search? 'bg-[#0074d9] border-[#0074d9] text-white' : 'bg-white border-[#0074d9] text-[#0074d9] hover:pl-8'} duration-300 border-2 rounded-xl px-3 py-2 font-bold w-full select-none flex justify-start items-center gap-2 shadow-md shadow-gray-300`} >
          <SearchIcon/>
          <p>Search</p>
        </button>
        <button onClick={() => navigate(homeRoutes.settings)} className={`${pathname === homeRoutes.settings? 'bg-[#0074d9] border-[#0074d9] text-white' : 'bg-white border-[#0074d9] text-[#0074d9] hover:pl-8'} duration-300 border-2 rounded-xl px-3 py-2 font-bold w-full select-none flex justify-start items-center gap-2 shadow-md shadow-gray-300`} >
          <SettingsIcon/>
          <p>Settings</p>
        </button>
      </div>
    </div>
  )
}

export default SideBar