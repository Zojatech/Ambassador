import React from "react";

const Button = ({ label, link }) => {
  return (
    <button className="inline-block w-fit whitespace-nowrap rounded-md bg-primary px-5 py-[10px] text-white">
      <a href={link}>{label}</a>
    </button>
  );
};

export default Button;
