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
        <div className='text'>
          <div className='left'>
            <img src={Brand} />
            <p>
              Zojapay is a peer-2-peer financial inclusion application that
              simplifies payment by making access to cash easy or retail market
            </p>
          </div>

          <div className='lists'>
            <div className='product'>
              <h3>Product Features</h3>
              <ul>
                <li>Cash request</li>
                <li>Transfer cash</li>
                <li>Utility payment</li>
              </ul>
            </div>

            <div className='product'>
              <h3>company</h3>
              <ul>
                <li>Terms and condition</li>
                <li>Privacy policy</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className='product'>
              <h3>Support</h3>
              <ul>
                <li>Gbagada lagos</li>
                <li>help@zojaypay.com</li>
                <li>
                  Follows us
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                  <a href  className="text-black-500 hover:text-blue-900 dark:hover:text-blue">
                    <i className='fa-brands fa-instagram'></i>
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
