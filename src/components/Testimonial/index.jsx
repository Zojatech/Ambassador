import React from 'react';
import TestimonialCard from './TestimonialCard';
import Triangle from '@/assets/images/triangle.png';
import { testimonials } from '@/data';
import Person from '@/assets/person.png';
import instagram from '@/assets/instagram.svg';

const Testimonial = () => {
  console.log(testimonials);
  return (
    <section id='testimonial'>
      <div className=' relative py-12 lg:pb-20 lg:pt-28'>
        {/* Triangle Vector */}
        <div className='absolute -top-4 left-[-10%] lg:-left-[15%] xl:-left-[10%]'>
          <img src={Triangle} alt='vector' />
        </div>

        {/* Heading and Cards */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-20 md:gap-y-10 '>
          <div className='col-span-2 sm:col-span-1 md:col-span-1'>
            <h2 className='mb-4 text-2xl font-bold sm:mb-0 md:text-3xl lg:text-[2.5rem] lg:leading-10'>
              Don’t take our word <br />
              for it Trust our ambassadors
            </h2>
          </div>
          <>
            {testimonials.map((item, index) => (
              <article
                className='col-span-2 sm:col-span-1 md:col-span-1'
                key={index}
              >
                <TestimonialCard
                  bgColor={item.bgColor}
                  name={item.name}
                  handle={item.handle}
                  testimony={item.testimony}
                  image={item.image}
                />
              </article>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
