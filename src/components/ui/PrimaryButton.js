import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='bg-primary-light hover:bg-secondary-light font-semibold font-secondary px-[30px] py-[12px] rounded-lg w-fit'>
      <p>{children}</p>
    </button>
  )
}

export default PrimaryButton
