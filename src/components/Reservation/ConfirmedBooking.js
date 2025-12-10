import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const bookingData = location.state;

  const formattedDate = new Date(bookingData.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date(
    `1970-01-01T${bookingData.time}`
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <section className="bg-highlight-light">
      <article className="container flex flex-col justify-center items-center gap-5 lg:gap-10 py-[7vw]">
        <div className="flex flex-col gap-3">
          <h1 className="hidden">Confirmation</h1>
          <h2 className="text-primary-dark text-center">
            Reservation Confirmed
          </h2>
          <h3 className="text-secondary-dark text-center">
            Thank you for your reservation at Little Lemon!
          </h3>
        </div>
        <table className="reservation-table">
          <tbody>
            <tr>
              <td>
                <p>Date:</p>
              </td>
              <td>
                <p>{formattedDate}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Time:</p>
              </td>
              <td>
                <p>{formattedTime}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Guests:</p>
              </td>
              <td>
                <p>{bookingData.guests}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Occasion:</p>
              </td>
              <td>
                <p>{bookingData.occasion}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default ConfirmedBooking;
