import React from 'react';
import Testimonial from '@/components/Testimonial';

const Features = () => {
  return (
    <div>
      <section>
        {/* BUILD CAREER-RELEVANT SKILLS */}
        <div>
          {/* Images */}
          <div>
            <div>{/* <img src={Friends1} alt='friends' /> */}</div>
            <div>{/* <img src={Friends2} alt='friends' /> */}</div>
          </div>

          {/* Title and Description */}
          <div>
            <h2>Build a career-relevant skills.</h2>
            <p>
              Equipping you with skill sets for a thriving career through
              networking and collaboration and connecting like minds to drive
              innovation and progress.{' '}
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <Testimonial />

      {/* WHAT IS IN FOR YOU */}
    </div>
  );
};

export default Features;
