import React from 'react';
import Testimonial from '@/components/Testimonial';
import People1 from '@/assets/friends-gisting.png';
import People2 from '@/assets/study-group.png';
import Button from '@/components/Button';

const Features = () => {
  return (
    <div className='px-6 pt-12 lg:px-28 lg:pt-28 lg:pb-20'>
      <section>
        {/* BUILD CAREER-RELEVANT SKILLS */}
        <div className='flex flex-col-reverse gap-8 lg:flex-row'>
          {/* Images */}
          <div className='relative flex'>
            <div className='w-64 lg:w-full'>
              <img src={People1} alt='friends' className='rounded-md' />
            </div>
            <div className='absolute  top-[20%] left-1/4 w-44 lg:w-full'>
              <img src={People2} alt='friends' className='rounded-md' />
            </div>
          </div>

          {/* Title and Description */}
          <div>
            <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold mb-4 lg:mb-6'>
              Build a career-relevant <br />
              skills.
            </h2>
            <p className=' lg:text-xl text-gray-text mb-5 lg:mb-14 lg:w-5/6'>
              Equipping you with skill sets for a thriving career through
              networking and collaboration and connecting like minds to drive
              innovation and progress.{' '}
            </p>
            <Button label='Learn More' />
          </div>
        </div>
      </section>
      <Testimonial />

      {/* WHAT IS IN FOR YOU */}
    </div>
  );
};

export default Features;
