import Brand from '../../assets/zojapay.png';
import Banner from '@/components/Banner';
import Waves from '@/assets/images/wavy.png';

const Footer = () => {
  return (
    <footer>
      {/* BANNER */}
      <Banner />

      <div className='relative w-full px-6 pb-10 pt-20 sm:pt-28 md:px-12 lg:px-28'>
        <div className='absolute bottom-0 right-0 -z-10'>
          <img src={Waves} alt='wavy background' />
        </div>
        <div className='px-4 py-[10px] text-sm md:mt-3 md:flex md:items-center  md:justify-between '>
          <div className='md:w-[30%]'>
            <div className='w-[90px] md:w-full'>
              <img src={Brand} alt='Zojapay brand logo' />
            </div>
            <p className='mb-8 mt-2 md:mb-0'>
              Zojapay is a peer-2-peer financial inclusion application that
              simplifies payment by making access to cash easy or retail market
            </p>
          </div>

          <div className=' md:flex md:w-3/5 md:justify-between'>
            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>Product Features</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>Cash request</li>
                <li>Transfer cash</li>
                <li>Utility payment</li>
              </ul>
            </div>

            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>company</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>Terms and condition</li>
                <li>Privacy policy</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>Support</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>Gbagada lagos</li>
                <li>help@zojaypay.com</li>
                <li>
                  Follows us
                  <a
                    href='/#'
                    className='text-black-500 dark:hover:text-blue hover:text-blue-900'
                  >
                    <i className='fa-brands fa-facebook-f  mx-[6px] text-[15px]'></i>
                  </a>
                  <a
                    href='/#'
                    className='text-black-500 dark:hover:text-blue hover:text-blue-900'
                  >
                    <i className='fa-brands fa-twitter mx-1.5 text-[15px]'></i>
                  </a>
                  <a
                    href='/#'
                    className='text-black-500 dark:hover:text-blue hover:text-blue-900'
                  >
                    <i className='fa-brands fa-instagram  mx-[6px] text-[15px]'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-black-500 dark:hover:text-blue ml-3.5 text-xs hover:text-blue-900 '>
          <a>
            <span className=''> &#169; 2020</span> Zojapay.All Right Reserved
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
