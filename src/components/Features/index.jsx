import React from 'react';
import Testimonial from '@/components/Testimonial';
import Develop from '@/components/Develop';
import Benefits from '@/components/Benefits';
import ToJoin from '@/components/ToJoin';

const Features = () => {
  return (
    <div className='px-6 pt-12 md:px-12 lg:px-28 lg:pt-28 lg:pb-20'>
      <Develop />

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* WHAT IS IN FOR YOU */}
      <Benefits />

      {/* HOW TO BE AN AMBASSADOR */}
      <ToJoin />
    </div>
  );
};

export default Features;
