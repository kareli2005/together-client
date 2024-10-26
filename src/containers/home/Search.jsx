import React, { useContext, useState, useEffect, useRef } from 'react'
import SearchedUser from '../../components/SearchedUser'
import { SystemMessageContext } from '../../contexts/systemMessageContext'
import SearchBar from '../../components/SearchBar'

const Search = () => {
  const [searchWord, setSearchWord] = useState('')
  const [searchedData, setSearchedData] = useState([])
  const [defaultText, setDefaultText] = useState('Searched users will appear here...')
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const containerRef = useRef(null)

  const { errorMessage, showError, clearMessages } = useContext(SystemMessageContext)

  const searchUser = () => {
    if (searchWord === 'search') {
      clearMessages()
      setSearchedData([
        { id: 1, username: 'Search1', email: 'Search1', picture: 'Search1', online: false },
        { id: 2, username: 'Search2', email: 'Search2', picture: 'Search2', online: true },
        { id: 3, username: 'Search3', email: 'Search3', picture: 'Search3', online: false },
      ])
    } else if (!searchWord) {
      setDefaultText('Searched users will appear here')
      showError('')
    } else {
      showError('No users found')
      setSearchedData([])
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) setHasScrollbar(container.scrollHeight > container.clientHeight)
  }, [searchedData])

  return (
    <div className='w-full h-full flex flex-col gap-4 home-container-enter'> 
      <SearchBar placeholder={'Type here...'} value={searchWord} setValue={setSearchWord} searchFunction={searchUser} />

      {searchedData.length === 0 || !searchedData ? (
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full h-full max-h-[300px] text-center flex justify-center items-center bg-white rounded-xl text-lg duration-300 md:text-2xl font-bold text-[#0074d9] p-4 shadow-lg shadow-gray-300'>
            <p>{errorMessage ? errorMessage : defaultText}</p>
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className={`w-full h-full overflow-y-auto overflow-x-hidden rounded-xl flex flex-col gap-4 scrollbar-thin scrollbar-webkit ${hasScrollbar ? 'pr-4' : ''}`}
        >
          {searchedData.map((user, key) => (
            <SearchedUser user={user} key={key} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
