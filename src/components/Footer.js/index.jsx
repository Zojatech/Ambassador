import Brand from '../../assets/zojapay.png';
import Banner from '@/components/Banner';
import Waves from '@/assets/images/wavy.png'

const Footer = () => {
  return (
    <footer>
      {/* BANNER */}
      <Banner />

      <div className='relative px-6 pb-10 pt-20 md:px-12 lg:px-28 sm:pt-28 w-full'>
      <div className='absolute right-0 bottom-0 -z-10'>
<img src={Waves} alt='wavy background'/>
      </div>
        <div className='text-sm py-[10px] px-4 md:mt-16 md:flex md:justify-between  md:items-center '>
          <div className='md:w-[30%]'>
          <div  className='w-[90px] md:w-full'>
            <img src={Brand} alt='Zojapay brand logo'/>
          </div>
            <p className='mt-2 mb-8 md:mb-0'>
              Zojapay is a peer-2-peer financial inclusion application that
              simplifies payment by making access to cash easy or retail market
            </p>
          </div>

          <div className=' md:w-3/5 md:flex md:justify-between'>
            <div className='mb-4 mx-0'>
              <h3 className='font-semibold capitalize'>Product Features</h3>
              <ul className='flex flex-col gap-2.5 mt-2.5'>
                <li>Cash request</li>
                <li>Transfer cash</li>
                <li>Utility payment</li>
              </ul>
            </div>

            <div>
              <h3  className='font-semibold capitalize'>company</h3>
              <ul className='flex flex-col gap-2.5 mt-2.5'>
                <li>Terms and condition</li>
                <li>Privacy policy</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className='product'>
              <h3  className='font-semibold capitalize'>Support</h3>
              <ul  className='flex flex-col gap-2.5 mt-2.5'>
                <li>Gbagada lagos</li>
                <li>help@zojaypay.com</li>
                <li>
                  Follows us
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-facebook-f  text-[15px] mx-[6px]'></i>
                  </a>
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-twitter text-[15px] mx-1.5'></i>
                  </a>
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-instagram  text-[15px] mx-[6px]'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-xs ml-3.5 text-black-500 hover:text-blue-900 dark:hover:text-blue '>
          <a>
            <span className='' >  &#169; 2020</span> Zojapay.All Right Reserved
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
