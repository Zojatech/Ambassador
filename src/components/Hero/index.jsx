import React from 'react';
import {motion} from 'framer-motion'
import Ambassadors from '@/assets/people.png';
import Star from '@/assets/images/star.png';

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col lg:flex-row lg:gap-4 justify-between items-center pt-24 px-6 pb-12 lg:pb-[92px] lg:px-28 sm:pt-36 '>
        {/* Title and Intro */}
        <motion.div className='flex flex-col relative flex-1 mb-12 lg:mb-0'             
        initial="hidden"
        whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
          <div className='absolute content-star z-[-1] left-[130px] lg:left-[230px] md:left-[170px] top-[-6%]'><img src={Star} alt='star vector'/>
          </div>
            <h1 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold mb-4 lg:mb-6'>
              Become an <br />
              aspiring ambassador
            </h1>
          <p className=' lg:text-xl text-gray-text mb-5 lg:mb-14 lg:w-[90%] xl:w-5/6'>
            Join our community and represent our brand as an ambassador. you’ll
            have the opportunity to represent zojapay and make meaningful
            connections with others who share your passion for positive Change.{' '}
          </p>
          <button className='bg-primary rounded-md text-white px-5 py-[10px] inline-block w-fit'>
            <a>Become an Ambassador</a>
          </button>
        </motion.div>

        {/* Image */}
        <div className='flex-1 w-[300px] lg:max-w-[500px]'>
          <img src={Ambassadors} alt='ambassadors' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
