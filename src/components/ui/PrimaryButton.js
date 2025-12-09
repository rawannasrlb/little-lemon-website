import React from "react";

const PrimaryButton = ({ children,isFormValid=true, ...props }) => {
  return (
    <button
      {...props}
      disabled={!isFormValid}
      className={`${isFormValid ? "bg-primary-light hover:bg-secondary-light" : "bg-gray-300 text-gray-400"} font-secondary font-bold px-[30px] py-[16px] rounded-lg w-fit`}
    >
      <p>{children}</p>
    </button>
  );
};

export default PrimaryButton;
