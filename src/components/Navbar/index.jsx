import React from 'react';
import Logo from '@/assets/zojapay.png';
import Link from './Link';

const Navbar = () => {
  return (
    <header>
      <div className='py-3 px-6 lg:px-28 flex justify-between items-center bg-gray-bg'>
        {/* Company Logo */}
        <div className='w-[103px] lg:w-[159px]'>
          <img src={Logo} alt='zojapay logo' />
        </div>

        {/* Features and FAQs */}
        <nav>
          <ul className='flex items-center gap-4 lg:gap-8'>
            <li>
              <Link pageSection='Features' />
            </li>
            <li>
              <Link pageSection='FAQS' />
            </li>
          </ul>
        </nav>

        {/* Get the App */}
        <div>
          <a className='p-[10px] border border-primary rounded-md'>
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
