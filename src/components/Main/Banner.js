import React from "react";
import bannerImage from "../../assets/images/restaurant-food.jpg";
import PrimaryButton from "../ui/PrimaryButton.js";

const Banner = () => {
  return (
    <section className="bg-primary-dark">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col gap-10 py-10 lg:py-6">
          <div>
            <h1 className="text-primary-light">Little Lemon</h1>
            <h2 className="text-white text-[3.25em]">Chicago</h2>
            <p className="text-white w-[70vw] lg:w-[30vw]">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <PrimaryButton>Reserve a Table</PrimaryButton>
        </div>
        <div className="relative hidden lg:block">
          <img
            src={bannerImage}
            alt="Restaurant food"
            className="image banner-image float-right lg:translate-y-[5rem] translate-y-[10rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
