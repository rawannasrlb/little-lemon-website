import React, { useEffect, useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [guestValidation, setGuestValidation] = useState("");

  // Guest number validation
  const handleGuestsNumber = (e) => {
    const value = Number(e.target.value);
    setGuests(value);

    if (value < 1) {
      setGuestValidation("The number should be greater than 1");
    } else if (value > 10) {
      setGuestValidation("The number should be less than 10");
    } else {
      setGuestValidation("");
    }
  };

  // Validate form whenever inputs change
  useEffect(() => {
    const valid = date && time && guests >= 1 && guests <= 10 && occasion;
    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <section>
      <div className="container flex flex-col justify-center items-center gap-10 py-[7vw]">
        <div className="flex flex-col gap-3">
          <h1 className="hidden">Reservation Form</h1>
          <h2 className="text-primary-dark text-center">
            Book your Reservation!
          </h2>
          <h3 className="text-secondary-dark text-center">
            Please enter the correct data
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-1/2"
        >
          <fieldset className="flex flex-col gap-5">
            <div>
              <label htmlFor="res-date">Choose Date</label>
              <input
                type="date"
                id="res-date"
                value={date}
                required
                onChange={(e) => {
                  setDate(e.target.value);
                  dispatch({ date: new Date(e.target.value) });
                }}
              />
            </div>
            <div>
              <label htmlFor="res-time">Choose Time</label>
              <select
                id="res-time"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="" disabled>Select Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                value={guests}
                required
                onChange={handleGuestsNumber}
                onBlur={() => {
                  if (!guests)
                    setGuestValidation("Please enter the number of guests");
                  else if (guests >= 1 && guests <= 10) setGuestValidation("");
                }}
                min="1"
                max="10"
              />
              {guestValidation && (
                <span className="text-red-600" role="alert">
                  {guestValidation}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                required
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="" disabled>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="mt-5 lg:mt-10 flex justify-center">
              <PrimaryButton
                type="submit"
                isFormValid={isFormValid}
                disabled={!isFormValid}
                aria-label="On Click"
              >
                Confirm Reservation
              </PrimaryButton>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
