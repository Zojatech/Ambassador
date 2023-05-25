import React from 'react';
import { motion } from 'framer-motion';
import Ambassadors from '@/assets/people.png';
import Star from '@/assets/images/star.png';
import Dropdown from '@/components/button-drop/Dropdown';

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col items-center justify-between px-6 pb-12 pt-24 sm:pt-36 lg:flex-row lg:gap-4 lg:px-28 lg:pb-[92px] lg:pt-48 '>
        {/* Title and Intro */}
        <motion.div
          className='relative mb-12 flex flex-1 flex-col lg:mb-0'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='content-star absolute left-[130px] top-[-6%] z-[-1] md:left-[170px] lg:left-[230px]'>
            <img src={Star} alt='star vector' />
          </div>
          <h1 className='mb-4 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-[2.5rem] lg:leading-10'>
            Become an <br />
            aspiring ambassador
          </h1>
          <p className=' mb-5 text-gray-text lg:mb-14 lg:w-[90%] lg:text-xl xl:w-5/6'>
            <strong>Join our community,</strong> represent our brand as an
            ambassador and earn while doing so by referring users to download
            and sign up on Zojapay. <br />
            <br /> Work remotely at your own pace. <br />
            <br />
            You can earn up to <strong>N45,000 </strong>
            and more monthly. <br />
            <br />
            Earn N100 for every successful referral who downloads Zojapay and
            Sign up. <br />
            You also stand a chance to win amazing gifts monthly based on
            performance. <br />
            <br />
            Get access to free periodic training to help you boost your career.
          </p>
          <div className='mb-4'>
            <a
              className='cursor-pointer rounded-md border border-primary p-[10px]'
              href='http://onelink.to/26kkc7'
            >
              Get the app
            </a>
          </div>
          <Dropdown label='Become an Ambassador ' />
        </motion.div>

        {/* Image */}
        <div className='w-[300px] flex-1 lg:max-w-[500px]'>
          <img src={Ambassadors} alt='ambassadors' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
