import React, { useReducer } from "react";
import BookingForm from "../components/Reservation/BookingFrom";
import "../components/Reservation/Reservation.css";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}


const updateTimes = (state, action) => {
  return initializeTimes();
};


const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="bg-highlight-light">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Reservation;
