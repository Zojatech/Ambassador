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
      <div className='fixed left-0 right-0 top-0 z-50 flex items-center justify-between  bg-gray-bg px-6 py-3 md:px-12 lg:px-28'>
        {/* Company Logo */}
        <div className='w-[103px] lg:w-[159px]'>
          <img src={Logo} alt='zojapay logo' />
        </div>

        <div className='md:hidden'>
          {/* HAMBURGER MENU & CLOSE */}
          <button
            className='flex items-center justify-center '
            type='button'
            onClick={menuHandler}
          >
            {!open ? (
              <BiMenuAltRight
                className='flex items-center justify-center text-[#494b83]'
                size={24}
              />
            ) : (
              <AiOutlineClose
                className='flex items-center justify-center'
                size={24}
              />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <nav className='z-5 absolute left-0 top-full flex w-full flex-col items-center justify-end bg-gray-bg py-6  md:hidden'>
            {/* <hr className='border border-gray-bg border-solid z-[999]' /> */}
            <ul className='flex flex-col  items-center gap-6 pb-3'>
              <li>
                <Link pageSection='Features' setOpen={menuHandler} />
              </li>
              <li>
                <Link pageSection='Faqs' setOpen={menuHandler} />
              </li>
              <li>
                <a
                  className='cursor-pointer rounded-md border border-primary p-[10px]'
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
          <a className='cursor-pointer rounded-md border border-primary p-[10px]'>
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
