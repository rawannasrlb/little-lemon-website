import React, { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";


const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time || !guests || !occasion) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = {date, time, guests, occasion}
    submitForm(formData)
  };

  return (
    <div>
      <div className="container flex flex-col justify-center items-center gap-10 py-[10vw]">
        {/* form header */}
        <h2 className="text-primary-dark">Book your Reservation!</h2>
        {/* form  */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-1/2"
        >
          <label>
            Choose date
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({ date: new Date(e.target.value) });
              }}
            />
          </label>

          <label>
            Choose time
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">-- select time --</option>
              {availableTimes.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </label>

          <label>
            Number of guests
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="10"
            />
          </label>

          <label>
            Occasion
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">-- select occasion --</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </label>
          <div className="mt-5 lg:mt-10 flex justify-center">
            <PrimaryButton type="submit">Confirm Reservation</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
