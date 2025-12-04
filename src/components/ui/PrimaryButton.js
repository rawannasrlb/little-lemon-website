import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='bg-primary-light hover:bg-secondary-light text-black text-[1.5rem] font-semibold font-secondary px-[30px] py-[12px] rounded-lg w-fit'>
      {children}
    </button>
  )
}

export default PrimaryButton
