import { accordionContent } from '@/data';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Faqs = () => {
  const [open, setOpen] = useState(false);
  const [accordionId, setAccordionId] = useState(null);

  const handleAccordion = (index) => {
    setAccordionId((prevIndex) => (prevIndex === index ? null : index));

    // setOpen((current) => !current);
    // setAccordionId(id);
  };

  return (
    <section id='faqs'>
      <div className='px-6 pt-12 lg:px-28 lg:pt-28 lg:pb-20'>
        {/* TITLE AND SUBTITLE */}
        <div className='mb-16 md:mb-24 text-center'>
          <p className='text-primary mb-3'>frequently asked questions</p>
          <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold '>
            You have questions?
            <br /> We have answers.
          </h2>
        </div>

        {/* ACCORDIONS */}
        <div className='grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-10 '>
          {accordionContent?.map((content, index) => {
            return (
              <div key={index} className='border-b border-gray-text'>
                <div className='flex justify-between gap-4 md:gap-0'>
                  <span className='text-primary font-medium xl:text-2xl'>
                    {content.question}
                  </span>
                  <span onClick={() => handleAccordion(index)}>
                    <AiOutlinePlusCircle size={24} />
                  </span>
                </div>
                <div className=' mt-10'>
                  <p
                    className={` ${accordionId === index ? 'block' : 'hidden'}`}
                  >
                    {content.answer}
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
