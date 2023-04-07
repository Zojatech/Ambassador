import React from 'react';
import Gift from '@/assets/icons/gift.svg';
import Badge from '@/assets/icons/badge.svg';
import Calendar from '@/assets/icons/calendar.svg';
import Note from '@/assets/icons/note.svg';
import Safe from '@/assets/icons/safe.svg';
import Growth from '@/assets/icons/growth.svg';

const Benefits = () => {
  return (
    <section id='benefits'>
      <div className='  mx-auto py-16 lg:py-8 max-w-sm sm:max-w-full'>
        <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-10 font-bold mx-auto text-center mb-12 lg:mb-28'>
          What’s in it for you!
        </h2>
        <div className='grid gap-16 grid-cols-1 sm:grid-cols-2 md:gap-x-32 md:gap-y-16 lg:grid-cols-3 lg:gap-x-24 xl:gap-x-[157px]'>
          {/* Testing Responsiveness Here */}
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-[#08E646] bg-opacity-[15%] flex justify-center items-center'>
                <img src={Gift} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Exciting branding items.
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-[#89CFF0] bg-opacity-[15%]  flex justify-center items-center'>
                <img src={Badge} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Obtain a certificate of participation{' '}
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-[#FFD60A] bg-opacity-[15%]  flex justify-center items-center'>
                <img src={Calendar} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Exclusive to Zojapay events
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-[#FFAF56] bg-opacity-[15%]  flex justify-center items-center'>
                <img src={Growth} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Exclusive to Zojapay events
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-[#2DBD9B] bg-opacity-[15%]  flex justify-center items-center'>
                <img src={Note} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Exclusive to Zojapay events
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
          <article className='col-span-1 w-3/4 sm:w-full'>
            <div className='flex flex-col gap-4'>
              {/* Logo */}
              <div className='mb-6 w-24 h-24 rounded-full bg-primary bg-opacity-[15%]  flex justify-center items-center'>
                <img src={Safe} />
              </div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl'>
                Exclusive to Zojapay events
              </h3>
              <p>
                Ambassadors get swag items to show off and share with friends.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
