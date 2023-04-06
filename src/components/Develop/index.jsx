import React from 'react';
import People1 from '@/assets/friends-gisting.png';
import People2 from '@/assets/study-group.png';
import Button from '@/components/Button';

const Develop = () => {
  return (
    <section>
      {/* BUILD CAREER-RELEVANT SKILLS */}
      <div className='flex flex-col-reverse gap-8 lg:flex-row'>
        {/* Images */}
        <div class='relative flex justify-center md:justify-start  lg:w-3/5'>
          <div class='md:w-2/3'>
            <img src={People1} alt='friends' className='rounded-md' />
          </div>
          <div class='absolute top-0 left-1/2 transform -translate-x-1/2 md:w-1/3'>
            <img src={People2} alt='friends' className='rounded-md' />
          </div>
        </div>

        {/* Title and Description */}
        <div class='flex flex-col justify-center lg:w-2/5'>
          <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold mb-4 lg:mb-6 '>
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
  );
};

export default Develop;
