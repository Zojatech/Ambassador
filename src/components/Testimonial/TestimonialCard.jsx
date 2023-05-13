import instagram from '@/assets/instagram.svg';

const TestimonialCard = ({ bgColor, handle, name, testimony, image }) => {
  return (
    <div className={`px-5 pb-14 pt-7 ${bgColor} rounded-md`}>
      <p className='mb-12 font-medium lg:mb-24'>{`"${testimony}"`}</p>
      <div className='flex items-center gap-6'>
        {/* Avatar */}
        <div className='h-[50px] w-[50px] rounded-full'>
          <img src={image} alt='person-avatar' className=' rounded-full' />
        </div>

        {/* Name and Socials */}
        <div>
          <p className='mb-3 text-2xl'>{name}</p>

          {/* Socials */}
          <div className='flex items-center gap-3'>
            <div className='w-6'>
              <img
                src={instagram}
                alt='instagram icon'
                className='max-w-full'
              />
            </div>
            <span>
              Instagram handle: <strong>{handle}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
