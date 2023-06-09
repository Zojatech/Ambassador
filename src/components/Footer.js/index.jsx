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
        <div className='px-4 py-[10px] text-sm md:mt-3 md:flex md:items-center  md:justify-between md:gap-14 lg:gap-28'>
          <div className='md:w-[30%]'>
            <div className='w-[90px] md:w-full'>
              <img src={Brand} alt='Zojapay brand logo' />
            </div>
            <p className='mb-8 mt-2 md:mb-0'>
              Zojapay is a peer-2-peer financial inclusion application that
              simplifies and enables hassle-free contactless and digital
              payments through modern day payment methods{' '}
            </p>
            <div className='hidden text-xs text-primary md:mt-3 md:block'>
              <a>
                <span className='text-primary'> &#169; 2020</span> Zojapay. All
                Right Reserved
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className=' md:flex md:w-[70%] md:justify-between md:gap-4'>
            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>Product Features</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>Buy Airtime</li>
                <li>Pay Bills</li>
                <li>Bank Transfer</li>
                <li>Merchant Payment and Collection</li>
                <li>POS Agent Cash Withdrawal</li>
                <li>NFC Payment</li>
                <li>QR Code Payment</li>
                <li>USSD</li>
                <li>Cards Payment</li>
              </ul>
            </div>

            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>Company</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>Terms and condition</li>
                <li>Privacy policy</li>
                <li>
                  <a href='#faqs'>FAQ</a>
                </li>
              </ul>
            </div>

            <div className='mx-0 mb-4'>
              <h3 className='font-semibold capitalize'>Support</h3>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                <li>
                  9b Akin-Ogunmade Davies Cl,
                  <br />
                  Gbagada 102216, Lagos
                </li>
                <a href='mailto:help@zojapay.com'>help@zojaypay.com</a>
                <li className='flex gap-3'>
                  Follow us
                  <a
                    href='https://www.facebook.com/zojapay'
                    className='text-primary'
                  >
                    <i className='fa-brands fa-facebook-f text-[15px]'></i>
                  </a>
                  <a
                    href='https://twitter.com/zojapay?s=20'
                    className='text-primary'
                  >
                    <i className='fa-brands fa-twitter text-[15px]'></i>
                  </a>
                  <a
                    href='https://www.instagram.com/zojapay/?igshid=NTc4MTIwNjQ2YQ=='
                    className='text-primary'
                  >
                    <i className='fa-brands fa-instagram  text-[15px]'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='ml-3.5 text-xs text-primary md:hidden '>
          <a>
            <span className='text-primary'> &#169; 2020</span> Zojapay.All Right
            Reserved
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
