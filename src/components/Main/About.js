import React from "react";
import workersImage from "../../assets/images/Mario-Adrian.jpg";
import restaurantImage from "../../assets/images/restaurant.jpg";

const About = () => {
  return (
    <section className="container bg-highlight-light grid grid-cols-1 items-center xl:grid-cols-2 gap-20 w-full py-[10vw]">
      {/* content for about section */}
      <div className="order-2 xl:order-1">
        <h1 className="text-primary-dark">Little Lemon</h1>
        <h2 className="text-secondary-dark">Chicago</h2>
        <p className="mt-5 text-justify">
          Little Lemon Chicago is a family owned Mediterranean restaurant
          located in the heart of the city. The restaurant is run by brothers
          Mario and Adrian, who have always had a passion for cooking and
          serving delicious food. Growing up in a Mediterranean household, the
          brothers were exposed to traditional recipes from an early age, and
          they decided to bring those recipes to the masses with a modern twist.
          At Little Lemon, you can expect to find a menu full of classic dishes
          with a creative twist that makes them stand out from the rest. Whether
          you're looking for a quick lunch or a leisurely dinner, Little Lemon
          Chicago is the perfect place to indulge in a delicious meal in a cozy
          and welcoming atmosphere.
        </p>
      </div>
      {/* images for about section */}
      <div className="relative w-full order-1 xl:order-2">
        <img src={restaurantImage} alt="Little lemon restaurant" className="image absolute z-[2] left-0 top-10 w-[60%] lg:h-[350px] xl:h-[500px]" />
        <img src={workersImage} alt="Little lemon restaurant" className="image relative float-right w-[60%] lg:h-[350px] xl:h-[500px]" />
      </div>
    </section>
  );
};

export default About;
