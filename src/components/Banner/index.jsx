import Phone from '../../assets/images/phone-group.png';
import Stroke from '../../assets/images/strokes.png';
import PlayStore from '../../assets/googlestore.svg';
import AppStore from '../../assets/appstore.svg';

const Banner = () => {
  return (
    <div className='px-6 pt-20 md:px-12 lg:px-28 sm:pt-28 lg:pb-20 xl:pt-48 w-full'>
      <div className='bg-primary w-full rounded-md'>
        <div className='pb-10  block sm:pb-4 sm:flex sm:justify-around'>
          <div className='p-4'>
            <h3 className='sm:text-base lg:text-lg mb-8 xl:text-3xl font-semibold capitalize text-white'>
              download zojapay now!
            </h3>
            <div className='flex items-center justify-evenly sm:justify-start gap-5 sm:max-w-[250px] lg:max-w-xs xl:max-w-full'>
              <a href=''>
                <img src={PlayStore} alt='Link to play store' />
              </a>
              <a href=''>
                <img src={AppStore} alt='Link to apple store' />
              </a>
            </div>
          </div>
          <div className='relative sm:w-[45%]'>
            <div
              className='w-1/2 sm:w-3/4 xl:w-3/5 mx-auto mt-10 sm:absolute 
                sm:bottom-[-5%] sm:right-1/4 xl:left-1/4'
            >
              <img src={Phone} className='' />
            </div>
            <div className='w-48 absolute top-[-150%] right-0 sm:right-[-10%] sm:top-0'>
              <img src={Stroke} className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
