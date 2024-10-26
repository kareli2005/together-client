import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { homeRoutes } from '../Routes';
// Material Ui
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

const MobileNavBar = () => {

  const [pathname, setPathname] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  return (
    <div className='md:hidden flex bg-white rounded-t-xl justify-around items-center p-3 mobile-navbar-enter'>
      <button onClick={() => navigate(homeRoutes.homePage)} className={`${pathname === homeRoutes.homePage? 'scale-110 bg-[#0074d9] text-white' : 'bg-slate-200 text-[#0074d9] hover:text-white hover:bg-blue-400'} shadow-md shadow-gray-300 p-4 w-14 h-14 rounded-full duration-300`}>
        <ChatIcon/>
      </button>
      <button onClick={() => navigate(homeRoutes.search)} className={`${pathname === homeRoutes.search? 'scale-110 bg-[#0074d9] text-white' : 'bg-slate-200 text-[#0074d9] hover:text-white hover:bg-blue-400'} shadow-md shadow-gray-300 p-4 w-14 h-14 rounded-full duration-300`}>
        <SearchIcon/>
      </button>
      <button onClick={() => navigate(homeRoutes.settings)} className={`${pathname === homeRoutes.settings? 'scale-110 bg-[#0074d9] text-white' : 'bg-slate-200 text-[#0074d9] hover:text-white hover:bg-blue-400'} shadow-md shadow-gray-300 p-4 w-14 h-14 rounded-full duration-300`}>
        <SettingsIcon/>
      </button>
    </div>
  )
}

export default MobileNavBar