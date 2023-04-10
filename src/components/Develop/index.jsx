import React from 'react';
import { motion } from "framer-motion";
import People1 from '@/assets/friends-gisting.png';
import People2 from '@/assets/study-group.png';
import Button from '@/components/Button';
import Star from '@/assets/images/star.png';


const Develop = () => {
  return (
    <section>
      {/* BUILD CAREER-RELEVANT SKILLS */}
      <motion.div className='flex flex-col-reverse gap-12 md:gap-5 lg:gap-8 xl:gap-16 md:flex-row mb-16'>

        {/* Images */}
        <motion.div class='relative flex justify-start items-center lg:w-[53%]'         animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>
          <div class='w-3/4 md:w-4/5'>
            <img src={People1} alt='friends' className='rounded-md' />
          </div>
          <div class='absolute top-1/4 left-1/2'>
            <img src={People2} alt='friends' className='rounded-md' />
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div class='relative flex flex-col justify-center md:w-1/2 lg:w-[47%]'             
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
        <div className='absolute content-star z-[-1] right-0 top-[-20%] lg:top-[-10%] xl:top-[2%]'><img src={Star} alt='star vector'/></div>
          <h2 className='text-2xl md:text-3xl xl:text-[2.5rem] lg:leading-10 font-bold mb-4 lg:mb-6 '>
            Build a career-relevant <br />
            skills.
          </h2>
          <p className=' lg:text-xl text-gray-text mb-5 lg:mb-14 lg:w-5/6'>
            Equipping you with skill sets for a thriving career through
            networking and collaboration and connecting like minds to drive
            innovation and progress.{' '}
          </p>
          <Button label='Learn More' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Develop;
