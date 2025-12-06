import React from "react";
import SpecialsCard from "./SpecialsCard";
import greekSalad from "../../assets/images/greek-salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import lemonDessert from "../../assets/images/lemon-dessert.jpg";
import PrimaryButton from "../ui/PrimaryButton";

const dishes = [
  {
    image: greekSalad,
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
  },
  {
    image: bruchetta,
    name: "Bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "6.99",
  },
  {
    image: lemonDessert,
    name: "Red Sauce Past",
    description:
      "The famous red sauce pasta of pasta, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "8.99",
  },
];

const Specials = () => {
  return (
    <section id="menu" className="container h-fit py-[15vw] flex flex-col gap-10">
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="leading-[0.7]">This week’s specials!</h2>
        <PrimaryButton>Order Online</PrimaryButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
        {dishes.map((dish, index) => (
          <SpecialsCard
            key={index}
            image={dish.image}
            name={dish.name}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
