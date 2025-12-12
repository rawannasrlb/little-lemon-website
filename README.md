# Little Lemon Restaurant

A responsive restaurant website with reservation functionality, built with React and Tailwind CSS.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Components](#components)
- [Navigation](#navigation)
- [Routing](#routing)
- [Accessibility](#accessibility)
- [Form Validation](#form-validation)
- [Styling](#styling)
- [Installation](#installation)
- [Testing](#testing)

---

## Project Overview

Little Lemon is a responsive restaurant website that allows users to view weekly specials, browse the menu, and make reservations. This documentation describes the app structure, features, installation, testing, accessibility measures, and how to run the project locally.

---

## Technologies Used

- React
- Tailwind CSS
- React Router (and react-router-hash-link)
- Font Awesome (icons)
- lucide-react (icons)
- React Testing Library
- Node.js / npm

---

## Features

- Responsive navigation (desktop + sliding mobile menu)
- Reservation form with HTML5 and React client-side validation
- Confirmation page showing submitted reservation data
- Semantic HTML and ARIA attributes for accessibility
- Social media links opening in new tabs
- Unit tests for critical components

---

## Components

- **Header**: Logo + Nav + MobileNav (hamburger menu)
- **Nav**: Desktop navigation using HashLink for smooth section scroll
- **MobileNav**: Slide-in menu with close icon
- **BookingForm**: Reservation form with validation (date, time, guests, occasion)
- **ConfirmedBooking**: Page displaying submitted reservation details
- **SpecialsCard**: Weekly specials with image + description
- **ReviewsCard**: Client reviews
- **Footer**: Social links and contact details

---

## Navigation

- Desktop navigation shows on screens `≥ lg`
- Mobile navigation uses hamburger menu (Lucide icon)
- Slide-in panel from the right with close icon
- Smooth scrolling using `react-router-hash-link`

---

## Routing

| Route          | Description                            |
| -------------- | -------------------------------------- |
| `/`            | Home page (hero, specials, highlights) |
| `/reservation` | Reservation form                       |
| `/confirmed`   | Reservation confirmation page          |

---

## Accessibility

- Semantic elements: `header`, `main`, `section`, `article`, `footer`
- Inputs properly connected to labels with `htmlFor`/`id`
- ARIA attributes where appropriate (`aria-label`, `aria-live`, `role="alert"`)
- Keyboard-friendly and screen-reader-friendly markup

---

## Form Validation

- Required fields: Date, Time, Guests, Occasion
- Guests must be between **1–10**
- Client-side validation handled with React (`useState`, `useEffect`)
- Submit button disabled until the form becomes valid
- Error messages displayed for invalid guest count

---

## Styling

- Tailwind CSS for layout and utilities
- Minimal custom CSS for specific cases (e.g., table spacing)
- Font Awesome for social icons
- Lucide-react for hamburger / close icons

---

## Installation

1. Clone the repository:
   git clone <repo_url>
2. Change directory:
   cd little-lemon-website
3. Install dependencies:
   npm install
4. Run the development server:
   npm start

## Testing

- Run tests:
  npm test

- Tests include:
  BookingForm renders and contains required fields
  HTML5 attributes (required, min, max) present on inputs
  Submit flow triggers submitForm with correct payload
