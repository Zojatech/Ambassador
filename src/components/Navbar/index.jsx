import React, { useState } from 'react';
import Logo from '@/assets/zojapay.png';
import Link from './Link';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen((value) => !value);
  };
  return (
    <header>
      <div className='fixed top-0 right-0 left-0 z-50 py-3 px-6 md:px-12  lg:px-28 flex justify-between items-center bg-gray-bg'>
        {/* Company Logo */}
        <div className='w-[103px] lg:w-[159px]'>
          <img src={Logo} alt='zojapay logo' />
        </div>

        <div className='md:hidden'>
          {/* HAMBURGER MENU & CLOSE */}
          <button
            class='flex items-center justify-center '
            type='button'
            onClick={menuHandler}
          >
            {!open ? (
              <BiMenuAltRight
                className='flex justify-center items-center text-[#494b83]'
                size={24}
              />
            ) : (
              <AiOutlineClose
                className='flex justify-center items-center'
                size={24}
              />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <nav className='flex flex-col justify-end py-6 items-center absolute z-5 top-full left-0 bg-gray-bg w-full  md:hidden'>
            {/* <hr className='border border-gray-bg border-solid z-[999]' /> */}
            <ul className='flex flex-col  gap-6 pb-3 items-center'>
              <li>
                <Link pageSection='Features' setOpen={menuHandler} />
              </li>
              <li>
                <Link pageSection='Faqs' setOpen={menuHandler} />
              </li>
              <li>
                <a
                  className='p-[10px] border border-primary rounded-md cursor-pointer'
                  onClick={menuHandler}
                >
                  Get the app
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* DESKTOP NAV */}
        {/* FEATURES and FAQs */}
        <nav className='hidden md:flex'>
          <ul className='flex items-center gap-4 lg:gap-8'>
            <li>
              <Link pageSection='Features' />
            </li>
            <li>
              <Link pageSection='FAQS' />
            </li>
          </ul>
        </nav>

        {/* GET THE APP */}
        <div className='hidden md:flex'>
          <a className='p-[10px] border border-primary rounded-md cursor-pointer'>
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
