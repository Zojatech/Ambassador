import Person from '@/assets/person.png';
import Instagram from '@/assets/instagram.svg';

const TestimonialCard = ({ bgColor }) => {
  return (
    <div className={`px-5 pt-7 pb-14 ${bgColor} rounded-md`}>
      <p className='font-medium mb-12 lg:mb-24'>
        “Being a Zojapay’s ambassador has taught me about leadership and
        teamwork. I’m always glad to preach the gospel about Zojapay.”
      </p>
      <div className='flex gap-6 items-center'>
        {/* Avatar */}
        <div className='w-[50px] h-[50px]'>
          <img src={Person} alt='person' />
        </div>
        {/* Name and Socials */}
        <div>
          <p className='text-2xl mb-3'>John Ovu</p>
          {/* Socials */}
          <div className='flex items-center gap-3'>
            <div className='w-6'>
              <img
                src={Instagram}
                alt='instagram icon'
                className='max-w-full'
              />
            </div>
            <span>
              Instagram handle: <strong>john_ovu</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
