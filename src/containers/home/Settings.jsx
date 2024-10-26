import React, { useContext, useState } from 'react'
import {SystemMessageContext} from '../../contexts/systemMessageContext'

// Material UI
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const Settings = () => {

  const {showError} = useContext(SystemMessageContext)

  const thisFunctionWillAddSoon = () => {
    return showError('This function will add soon.')
  }

  const userData = {
    id: 1,
    username: 'tsotne kareli',
    email: 'tsotne.kareli@gmai.com',
    Password: 'password',
    profile: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }

  return (
    <div className='w-full h-full rounded-xl flex flex-col justify-start items-center gap-4 home-container-enter'>
      <div className='flex flex-col sm:flex-row gap-4 w-full duration-300 justify-center items-center'>
        <div className='h-[160px] w-[160px] min-h-[160px] min-w-[160px] md:h-[220px] md:w-[220px] md:min-w-[220px] md:min-h-[220px] aspect-square flex rounded-xl overflow-hidden p-2 bg-white duration-300 relative'>
          <div className='w-full h-full absolute cursor-pointer duration-300 top-0 left-0 opacity-0 hover:opacity-100 bg-black bg-opacity-10 text-white font-bold text-sm flex flex-col justify-center items-center gap-2'>
            <button onClick={thisFunctionWillAddSoon} className='w-2/3 select-none flex gap-1 border-2 rounded-xl border-[#0074d9] bg-[#0074d9] bg-opacity-60 hover:bg-opacity-100 duration-300 px-2 py-1 justify-center items-center'>
              <PublishedWithChangesIcon/>
              <p>Update</p>
            </button>
            <button onClick={thisFunctionWillAddSoon} className='w-2/3 select-none flex gap-1 border-2 rounded-xl border-red-600 bg-red-600 bg-opacity-60 hover:bg-opacity-100 duration-300 px-2 py-1 justify-center items-center'>
              <DeleteIcon/>
              <p>Delete</p>
            </button>
          </div>
          <img src={userData.profile} alt="/user_profile" className='rounded-xl w-full h-full flex object-cover' />
        </div>
        <div className='flex w-full max-w-2/3 h-full flex-col gap-4 font-bold text-slate-500 text-sm sm:text-base md:text-lg duration-300'>
          <div className='bg-white px-6 py-4 rounded-xl h-full w-full flex justify-between items-center flex-wrap gap-2'>
            <p className='flex gap-2 text-center'>
              Email: <span className='text-[#0074d9]'>{userData.email}</span>
            </p>
            <button onClick={thisFunctionWillAddSoon} className='flex gap-1 justify-center items-center hover:underline'>
              <DriveFileRenameOutlineIcon className='max-w-[18px] max-h-[18px]'/>
              <p>Change</p>
            </button>
          </div>
          <div className='bg-white px-6 py-4 rounded-xl h-full w-full flex justify-between items-center flex-wrap gap-2'>
            <p className='flex gap-2 text-center'>
              Username: <span className='text-[#0074d9]'>{userData.username}</span>
            </p>
            <button onClick={thisFunctionWillAddSoon} className='flex gap-1 justify-center items-center hover:underline'>
              <DriveFileRenameOutlineIcon className='max-w-[18px] max-h-[18px]'/>
              <p>Change</p>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full gap-4 font-bold text-slate-500 text-sm sm:text-base md:text-lg bg-white rounded-xl py-4 sm:py-6 px-6 flex justify-between items-start duration-300'>
        <div className='flex gap-4 text-center items-center'>
          <p className='flex gap-2 text-center'>
            Update Password: 
          </p>
        </div>
        <button onClick={thisFunctionWillAddSoon} className='flex gap-1 justify-center items-center hover:underline'>
          <DriveFileRenameOutlineIcon className='max-w-[18px] max-h-[18px]'/>
          <p>Change</p>
        </button>
      </div>
    </div>
  )
}

export default Settings
