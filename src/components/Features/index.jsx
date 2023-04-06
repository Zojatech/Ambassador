import React from 'react';
import Testimonial from '@/components/Testimonial';
import Develop from '@/components/Develop';
import Benefits from '@/components/Benefits';

const Features = () => {
  return (
    <div className='px-6 pt-12 md:px-12 lg:px-28 lg:pt-28 lg:pb-20'>
      <Develop />

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* WHAT IS IN FOR YOU */}
      <Benefits />
    </div>
  );
};

export default Features;
