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
    const valid =
      date &&
      time &&
      guests >= 1 &&
      guests <= 10 &&
      occasion;
    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <div>
      <div className="container flex flex-col justify-center items-center gap-10 py-[10vw]">
        <h2 className="text-primary-dark">Book your Reservation!</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-1/2"
        >
          <label>
            Choose date
            <input
              type="date"
              value={date}
              required
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({ date: new Date(e.target.value) });
              }}
            />
          </label>

          <label>
            Choose time
            <select
              value={time}
              required
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">-- select time --</option>
              {availableTimes.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </label>

          <div>
            <label>
              Number of guests
              <input
                type="number"
                value={guests}
                required
                onChange={handleGuestsNumber}
                onBlur={() => {
                  if (!guests) setGuestValidation("Please enter the number of guests");
                  else if (guests >= 1 && guests <= 10) setGuestValidation("");
                }}
                min="1"
                max="10"
              />
            </label>
            {guestValidation && (
              <span className="text-red-600">{guestValidation}</span>
            )}
          </div>

          <label>
            Occasion
            <select
              value={occasion}
              required
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">-- select occasion --</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </label>

          <div className="mt-5 lg:mt-10 flex justify-center">
            <PrimaryButton type="submit" isFormValid={isFormValid} disabled={!isFormValid}>
              Confirm Reservation
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
