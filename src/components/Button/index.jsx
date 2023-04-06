import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='bg-primary rounded-md text-white px-5 py-[10px] inline-block w-fit'>
      <a>{label}</a>
    </button>
  );
};

export default Button;
