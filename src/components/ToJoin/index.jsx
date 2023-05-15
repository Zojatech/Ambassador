import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Ambassador from '../../assets/ambassadors.jpg';
import { toJoin } from '@/data';
import Dropdown from '@/components/button-drop/Dropdown';

const ToJoin = () => {
  return (
    <section id='to-join'>
      <div className='mb-24 mt-9'>
        <h2 className='mb-10 text-xl font-bold sm:mb-24 md:text-2xl lg:text-3xl'>
          All you need to become an Ambassador
        </h2>

        <div className=' w-full items-stretch sm:flex sm:gap-12 lg:gap-16'>
          {/* IMAGE */}
          <div className='mb-12 sm:relative sm:mb-0 sm:w-1/2'>
            <img
              src={Ambassador}
              className='left-0 top-0 h-full w-full object-cover sm:absolute'
            />
          </div>

          {/* NEEDS LIST */}
          <motion.div
            className='sm:w-1/2 '
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h3 className='mb-8 text-lg font-semibold sm:mb-8 lg:mb-16'>
              To become a Zojapay Ambassador, you need to first Download and
              Sign up on the app to get a referral code among others as listed
              below.
            </h3>
            <ul className='mb-10 flex flex-col justify-between gap-4 lg:mb-14'>
              {toJoin?.map((item, index) => (
                <li
                  key={index}
                  className='flex gap-3 border-b border-solid border-gray-border pb-6 text-sm font-medium lg:text-base'
                >
                  <div className='h-5 w-5 flex-shrink-0 rounded-full bg-[#08E646]'></div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <Dropdown label='Become an Ambassador' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToJoin;
