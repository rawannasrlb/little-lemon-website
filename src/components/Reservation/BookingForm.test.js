import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

const mockTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

function renderForm() {
  return render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
}

test("renders the BookingForm heading", () => {
  renderForm();
  expect(screen.getByText("Book your Reservation!")).toBeInTheDocument();
});

test("renders the 'Choose date' label", () => {
  renderForm();
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test("date input has required attribute", () => {
  renderForm();
  expect(screen.getByLabelText(/choose date/i)).toBeRequired();
});

test("time select has required attribute", () => {
  renderForm();
  expect(screen.getByLabelText(/choose time/i)).toBeRequired();
});

test("guests input has required attribute and min/max", () => {
  renderForm();
  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select has required attribute", () => {
  renderForm();
  expect(screen.getByLabelText(/occasion/i)).toBeRequired();
});

test("calls submitForm with form data when submitted", () => {
  renderForm();

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-12-10" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: 2 },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /confirm reservation/i })
  );

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2025-12-10",
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  });
});
