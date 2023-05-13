import { accordionContent } from '@/data';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsDashCircle } from 'react-icons/bs';

const Faqs = () => {
  const [accordionId, setAccordionId] = useState(null);

  const handleAccordion = (index) => {
    setAccordionId((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id='faqs'>
      <div className='bg-primary bg-opacity-10 px-6 pb-16 pt-12 md:px-12 lg:px-28 lg:pb-24 lg:pt-28'>
        {/* TITLE AND SUBTITLE */}
        <div className='mb-16 text-center md:mb-24'>
          <p className='mb-3 text-primary'>frequently asked questions</p>
          <h2 className='text-2xl font-bold md:text-3xl lg:text-[2.5rem] lg:leading-10 '>
            You have questions?
            <br /> We have answers.
          </h2>
        </div>

        {/* ACCORDIONS */}
        <div className='grid grid-cols-1 gap-12  sm:grid-cols-1 md:grid-cols-2 lg:gap-x-36 lg:gap-y-10 '>
          {accordionContent?.map((content, index) => {
            return (
              <div key={index} className='border-b border-gray-text'>
                <div className='flex items-center justify-between gap-4 md:gap-0'>
                  <span className='font-medium text-primary xl:text-2xl'>
                    {content.question}
                  </span>
                  <span onClick={() => handleAccordion(index)}>
                    <span>
                      <AiOutlinePlusCircle
                        size={24}
                        className={` ${
                          accordionId === index ? 'hidden' : 'block'
                        }`}
                      />
                    </span>
                    <span>
                      <BsDashCircle
                        size={22}
                        className={` ${
                          accordionId === index ? 'block' : 'hidden'
                        }`}
                      />
                    </span>
                  </span>
                </div>
                <div className=' mt-10'>
                  <p
                    className={` ${accordionId === index ? 'block' : 'hidden'}`}
                  >
                    <span>{content.answer}</span>
                    <a className='text-primary' href='zojapay.com'>
                      {content.link}
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
