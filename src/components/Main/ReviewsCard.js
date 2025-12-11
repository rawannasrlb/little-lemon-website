import React from "react";

const ReviewsCard = ({ image, name, rate, message }) => {
  return (
    <article className="card flex flex-col w-full h-fit p-2 xl:p-5 gap-2 lg:gap-5">
      {/* reviewer details / rate */}
      <div className="flex flex-row items-center w-full gap-2 2xl:gap-5">
        {/* reviewer image */}
        <div className="w-[70px] lg:w-[120px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-[100%]" />
        </div>
        {/* reviewer name / rate */}
        <div className="w-full">
          <h3 className="text-[1.5rem]">{name}</h3>
          <div>
            {[...Array(Number(rate))].map((_, index) => (
              <i
                key={index}
                className="fa-solid fa-star text-yellow-400 text-lg"
              ></i>
            ))}
          </div>
        </div>
      </div>
      {/* message */}
      <div>
        <p className="text-[1rem]">{message}</p>
      </div>
    </article>
  );
};

export default ReviewsCard;
