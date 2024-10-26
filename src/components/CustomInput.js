import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const CustomInput = ({ placeholder, type, icon, name, id, value, setValue, disabled }) => {
  const [show, setShow] = useState(false)

  return (
    <div className='duration-300 border-2 border-[#0073d9] rounded-xl px-3 py-2 w-full flex justify-start items-center gap-2'>
      {icon}
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={show ? 'text' : type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='text-slate-500 outline-none h-full w-full'
      />
      {type === 'password' && (
        show
          ? <VisibilityIcon onClick={() => setShow(false)} className='text-slate-400 cursor-pointer hover:text-[#0074d9] duration-300' />
          : <VisibilityOffIcon onClick={() => setShow(true)} className='text-slate-400 cursor-pointer hover:text-[#0074d9] duration-300' />
      )}
    </div>
  )
}

export default CustomInput
