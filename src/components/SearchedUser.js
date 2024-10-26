import React from 'react'

const SearchedUser = ({user}) => {
  return (
    <div className='w-full bg-white rounded-xl p-4 flex gap-4 cursor-pointer relative shadow-lg shadow-gray-300'>
      <div>
        <img src={user.picture} alt="/userProfile" className='w-14 h-14 rounded-lg bg-slate-400' />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <p className='font-bold text-[#0074d9] md:text-lg'>{user.email}</p>
        <p className='font-bold text-[#0074d9] md:text-lg'>{user.username}</p>
      </div>
      <div className={`${user.online? 'bg-green-600': 'bg-[#0074d9]'} absolute top-2 right-2 py-1 px-2 rounded-xl text-white text-xs md:text-base`}> 
        {user.online? 'Online' : 'Offline'}
      </div>
    </div>
  )
}

export default SearchedUser