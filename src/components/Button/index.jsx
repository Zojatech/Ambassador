import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='bg-primary whitespace-nowrap rounded-md text-white px-5 py-[10px] inline-block w-fit'>
      <a href='#'>{label}</a>
    </button>
  );
};

export default Button;
