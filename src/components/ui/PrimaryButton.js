import React from "react";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-primary-light hover:bg-secondary-light font-secondary font-bold px-[30px] py-[16px] rounded-lg w-fit"
    >
      <p>{children}</p>
    </button>
  );
};

export default PrimaryButton;
