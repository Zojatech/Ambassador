import React from 'react';
import Ambassadors from '@/assets/people.png';

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col lg:flex-row lg:gap-4 justify-between items-center pt-12 px-6 lg:px-28 '>
        {/* Title and Intro */}
        <div className='flex flex-col relative flex-1 mb-8 lg:mb-0'>
          <div></div>
          <h1 className='text-3xl lg:text-[2.5rem] font-bold mb-4 lg:mb-6'>
            Become an <br />
            aspiring ambassador
          </h1>
          <p className=' lg:text-xl text-gray-text mb-5 lg:mb-14 lg:w-5/6'>
            Join our community and represent our brand as an ambassador. you’ll
            have the opportunity to represent zojapay and make meaningful
            connections with others who share your passion for positive Change.{' '}
          </p>
          <button className='bg-primary rounded-md text-white px-5 py-[10px] inline-block w-fit'>
            <a>Become an Ambassador</a>
          </button>
        </div>

        {/* Image */}
        <div className='flex-1 w-[300px] lg:max-w-[500px]'>
          <img src={Ambassadors} alt='ambassadors' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
