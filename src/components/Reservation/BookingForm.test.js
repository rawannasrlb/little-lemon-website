import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = jest.fn();

test("renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  const headingElement = screen.getByText("Book your Reservation!");
  expect(headingElement).toBeInTheDocument();
});

test("renders the 'Choose date' label", () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
