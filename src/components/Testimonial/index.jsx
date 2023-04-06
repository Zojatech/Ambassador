import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className=' py-12 lg:pt-28 lg:pb-20'>
        {/* Triangle Vector */}
        <div></div>

        {/* Heading and Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-20 lg:gap-y-10 '>
          <div className='col-span-2 md:col-span-1'>
            <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold'>
              Don’t take our word <br />
              for it Trust our ambassadors
            </h2>
          </div>
          <article className='col-span-2 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#FFF6EE]' />
          </article>
          <article className='col-span-2 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#ECFBEC]' />
          </article>
          <article className='col-span-2 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#FDF3F6]' />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;