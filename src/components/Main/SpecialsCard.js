import React from "react";

const SpecialsCard = ({ image, name, description, price }) => {
  return (
    <article className="card flex flex-row lg:flex-col overflow-hidden w-full h-full">
      {/* image container */}
      <div className="w-1/3 lg:w-full h-full lg:h-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* content container */}
      <div className="flex flex-col w-2/3 lg:w-full h-full lg:h-2/3 p-2 sm:p-5 gap-2 lg:gap-5 justify-center lg:justify-start">
        <div className="flex justify-between items-center">
          <h3>{name}</h3>
          <p className="text-secondary-dark font-semibold">$ {price}</p>
        </div>
        <p className="line-clamp-2 lg:line-clamp-none">
          {description}
        </p>
      </div>
    </article>
  );
};

export default SpecialsCard;
