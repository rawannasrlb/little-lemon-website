import React from "react";
import dishIcon from "../../assets/icons/dish-icon.svg";

const SpecialsCard = ({ image, name, description, price }) => {
  return (
    <article className="card flex flex-row lg:flex-col overflow-hidden w-full lg:h-full">
      {/* image container */}
      <div className="w-1/3 lg:w-full h-[90px] sm:h-[120px] lg:h-1/2 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* content container */}
      <div className="flex flex-col w-2/3 lg:w-full h-full lg:h-1/2 p-2 sm:p-5 gap-2 lg:gap-5 justify-center lg:justify-start">
        <div className="flex justify-between items-center">
          <h3>{name}</h3>
          <p className="text-secondary-dark font-semibold">$ {price}</p>
        </div>
        <p className="line-clamp-2 lg:line-clamp-3 xl:line-clamp-none">{description}</p>
      </div>
      <div className="hidden lg:flex items-end gap-2 p-5">
        <p className="font-bold">Order a delivery</p>
        <img src={dishIcon} alt="dish icon" />
      </div>
    </article>
  );
};

export default SpecialsCard;
