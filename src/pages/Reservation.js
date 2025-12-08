import React, { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api"
import BookingForm from "../components/Reservation/BookingForm";
import "../components/Reservation/Reservation.css";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(action.date);
};

const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();


  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData); // call submitAPI
      if (result) {
        navigate("/confirmed", { state: formData }); // navigate with the form data
      } else {
        alert("Failed to submit reservation");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-highlight-light">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Reservation;
