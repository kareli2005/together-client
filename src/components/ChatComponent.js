import React from 'react'

const ChatComponent = ({chat}) => {
  return (
    <div className='w-full bg-white rounded-xl p-4 flex gap-4 cursor-pointer relative shadow-lg shadow-gray-300'>
      <div>
        <img src={chat.user.picture} alt="/userProfile" className='w-14 h-14 rounded-lg bg-slate-400' />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <p className='font-bold text-[#0074d9] md:text-lg'>{chat.user.email}</p>
        <p className='text-slate-500 text-sm md:text-base'><span className='font-bold'>{chat.sender}</span>: {chat.lastMessage.message.slice(0, 12)+'...'}</p>
      </div>
      <div className={`${chat.lastMessage.isRead? 'hidden': 'flex'} absolute top-2 right-2 py-1 px-2 bg-[#0074d9] rounded-xl text-white text-xs md:text-base`}> 
        {!chat.lastMessage.isRead && 'New'}
      </div>
    </div>
  )
}

export default ChatComponent