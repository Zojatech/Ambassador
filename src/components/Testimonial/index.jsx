import React from 'react';
import TestimonialCard from './TestimonialCard';
import Triangle from '@/assets/images/triangle.png'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className=' py-12 lg:pt-28 lg:pb-20 relative'>
        {/* Triangle Vector */}
        <div className='absolute -top-4 left-[-10%] lg:-left-[15%] xl:-left-[10%]'>
          <img src={Triangle} alt='vector'/>
        </div>

        {/* Heading and Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-x-20 md:gap-y-10 '>
          <div className='col-span-2 sm:col-span-1 md:col-span-1'>
            <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold mb-4 sm:mb-0'>
              Don’t take our word <br />
              for it Trust our ambassadors
            </h2>
          </div>
          <article className='col-span-2 sm:col-span-1 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#FFF6EE]' />
          </article>
          <article className='col-span-2 sm:col-span-1 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#ECFBEC]' />
          </article>
          <article className='col-span-2 sm:col-span-1 md:col-span-1'>
            <TestimonialCard bgColor='bg-[#FDF3F6]' />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
