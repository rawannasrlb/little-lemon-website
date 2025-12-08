import React from 'react'
import { useLocation} from 'react-router-dom'

const ConfirmedBooking = () => {
    const location = useLocation();
    const bookingData = location.state;

  return (
    <div className='container flex flex-col justify-center items-center gap-10 py-[10vw]'>
      date : {bookingData.date}
    </div>
  )
}

export default ConfirmedBooking
