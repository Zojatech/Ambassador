import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Ambassador from '../../assets/ambassadors.jpg';
import { toJoin } from '@/data';

const ToJoin = () => {
  return (
    <section id='to-join'>
      <div className='mb-24 mt-9'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-10 sm:mb-24'>
          All you need to become an Ambassador
        </h2>

        <div className=' sm:flex w-full sm:gap-12 lg:gap-16 items-stretch'>
          {/* IMAGE */}
          <div className='mb-12 sm:mb-0 sm:w-1/2 sm:relative'>
            <img
              src={Ambassador}
              className='sm:absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>

          {/* NEEDS LIST */}
          <motion.div className='sm:w-1/2 '         
          initial="hidden"
        whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h3 className='mb-8 text-lg font-semibold sm:mb-8 lg:mb-16'>
              To become a Zojapay Ambassador, you need to be bold and creative.
              also these are needed:
            </h3>
            <ul className='flex flex-col justify-between gap-4 mb-10 lg:mb-14'>
              {toJoin?.map((item, index) => (
                <li
                  key={index}
                  className='text-sm lg:text-base pb-6 border-gray-border border-b border-solid font-medium flex gap-3'
                >
                  <div className='w-5 h-5 rounded-full bg-[#08E646] flex-shrink-0'></div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <Button label='Become and Ambassador' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToJoin;
