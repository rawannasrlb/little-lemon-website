import React from "react";
import reviewerImage from "../../assets/images/reviewer.png";
import ReviewsCard from "./ReviewsCard";

const reviews = [
  {
    image: reviewerImage,
    name: "Sarah Martinez",
    rate: "5",
    message: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    image: reviewerImage,
    name: "Sarah Martinez",
    rate: "5",
    message: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    image: reviewerImage,
    name: "Sarah Martinez",
    rate: "5",
    message: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    image: reviewerImage,
    name: "Sarah Martinez",
    rate: "5",
    message: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
];
const Reviews = () => {
  return (
    <section className="container py-[10vw] bg-secondary-light flex flex-col justify-center items-center gap-10 lg:gap-20">
      <div>
        <h2>What do our customers think?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-10 w-full">
        {reviews.map((review, index) => (
          <ReviewsCard
            key={index}
            image={review.image}
            name={review.name}
            rate={review.rate}
            message={review.message}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
