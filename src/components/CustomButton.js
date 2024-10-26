import React from 'react'

const CustomButton = ({ isDisabled, onclick, text, disabledText, icon, disabledIcon, type }) => {
  return (
    <button
      type={type}
      onClick={isDisabled ? null : onclick}
      className={`${isDisabled ? 'bg-red-600 border-red-600 cursor-default text-white' : 'bg-white border-[#0074d9] text-[#0074d9] hover:bg-[#0074d9] hover:text-white hover:pl-8 cursor-pointer'} duration-300 border-2 rounded-xl px-3 py-2 font-bold w-full select-none flex justify-start items-center gap-2`}
    >
      {isDisabled ? disabledIcon : icon}
      <p>{isDisabled ? disabledText : text}</p>
    </button>
  )
}

export default CustomButton
