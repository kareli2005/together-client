import React, { useEffect, useRef, useState } from 'react'
import ChatComponent from '../../components/ChatComponent'

const Chats = () => {
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const containerRef = useRef(null)

  const chatsData = [
    {
      id: 1,
      lastMessage: {
        message: 'Hello, how are you?',
        timestamp: '2024-10-26T10:00:00Z',
        isRead: true
      },
      user: {
        id: 'user_02',
        email: 'toko@example.com',
        username: 'Tornike Kareli',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 2,
      lastMessage: {
        message: 'Are we still on for dinner tonight?',
        timestamp: '2024-10-26T10:05:00Z',
        isRead: false
      },
      user: {
        id: 'user_03',
        email: 'lisa@example.com',
        username: 'Lisa Smith',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Lisa Smith'
    },
    {
      id: 3,
      lastMessage: {
        message: 'I will send you the report by EOD.',
        timestamp: '2024-10-26T10:15:00Z',
        isRead: true
      },
      user: {
        id: 'user_04',
        email: 'john@example.com',
        username: 'John Doe',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 4,
      lastMessage: {
        message: 'Let’s catch up soon!',
        timestamp: '2024-10-26T10:20:00Z',
        isRead: <tr></tr>
      },
      user: {
        id: 'user_05',
        email: 'mike@example.com',
        username: 'Mike Johnson',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Mike Johnson'
    },
    {
      id: 5,
      lastMessage: {
        message: 'Great job on the presentation!',
        timestamp: '2024-10-26T10:25:00Z',
        isRead: true
      },
      user: {
        id: 'user_06',
        email: 'sara@example.com',
        username: 'Sara Wilson',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 6,
      lastMessage: {
        message: 'Can you review my code?',
        timestamp: '2024-10-26T10:30:00Z',
        isRead: false
      },
      user: {
        id: 'user_07',
        email: 'alex@example.com',
        username: 'Alex Green',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Alex Green'
    },
    {
      id: 7,
      lastMessage: {
        message: 'See you at the conference!',
        timestamp: '2024-10-26T10:35:00Z',
        isRead: true
      },
      user: {
        id: 'user_08',
        email: 'emily@example.com',
        username: 'Emily Davis',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 8,
      lastMessage: {
        message: 'Do you have the slides ready?',
        timestamp: '2024-10-26T10:40:00Z',
        isRead: true
      },
      user: {
        id: 'user_09',
        email: 'mark@example.com',
        username: 'Mark Brown',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Mark Brown'
    },
    {
      id: 9,
      lastMessage: {
        message: 'Looking forward to our project meeting!',
        timestamp: '2024-10-26T10:45:00Z',
        isRead: true
      },
      user: {
        id: 'user_10',
        email: 'laura@example.com',
        username: 'Laura White',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 10,
      lastMessage: {
        message: 'Can we reschedule our call?',
        timestamp: '2024-10-26T10:50:00Z',
        isRead: false
      },
      user: {
        id: 'user_11',
        email: 'tom@example.com',
        username: 'Tom Black',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Tom Black'
    },
    {
      id: 11,
      lastMessage: {
        message: 'Thanks for your help!',
        timestamp: '2024-10-26T10:55:00Z',
        isRead: true
      },
      user: {
        id: 'user_12',
        email: 'jessica@example.com',
        username: 'Jessica Grey',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'You'
    },
    {
      id: 12,
      lastMessage: {
        message: 'I’ll get back to you soon.',
        timestamp: '2024-10-26T11:00:00Z',
        isRead: false
      },
      user: {
        id: 'user_13',
        email: 'nick@example.com',
        username: 'Nick Blue',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      },
      sender: 'Nick Blue'
    }
  ];

  useEffect(() => {
    const container = containerRef.current
    if (container) setHasScrollbar(container.scrollHeight > container.clientHeight)
  }, [chatsData])

  return (
    <div ref={containerRef}
      className={`w-full h-full rounded-xl home-container-enter flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-webkit ${hasScrollbar ? 'pr-4' : ''}`}
    >
      {chatsData.map((chat, key) => (
        <ChatComponent chat={chat} key={key} />
      ))}
    </div>
  )
}

export default Chats
