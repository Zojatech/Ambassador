import personImage from '@/assets/person.png';
import Cassy from '@/assets/images/cassy.jpg';
import andrewImage from '@/assets/images/andrew.png';
import Gift from '@/assets/icons/gift.svg';
import Badge from '@/assets/icons/badge.svg';
import Calendar from '@/assets/icons/calendar.svg';
import Safe from '@/assets/icons/safe.svg';

export const accordionContent = [
  {
    question: 'Who is eligible to apply?',
    answer:
      'Anybody is eligible to apply. There are two categories, one for students of tertiary institutions and the other for anybody interested in making money.',
  },
  {
    question: 'How does Zojapay recruit ambassadors?',
    answer:
      'We recruit ambassadors by making applications open to everyone through our platforms such as this. This is because we believe everyone should have an extra source of income and we are offering one.',
  },
  {
    question: 'Is the program only for student?',
    answer:
      'No. Everyone can apply. However, we have two categories, one for students of tertiary institutions and the other for anybody interested in making money',
  },
  {
    question: 'How much does it cost to apply?',
    answer:
      'It is totally free. However, you need to download the Zojapay App and signup first to be eligible',
  },
  {
    question: 'If I have information or inquiries, who do I reach?',
    answer: `Call the phone numbers on the website or send a message to `,
    link: 'help@zojapay.com',
  },
  {
    question: 'How do I earn money as an ambassador?',
    answer:
      'You earn N100 for every successful referral you made using your referral code during signup process. Using the total number of referrals, payment will be collated and paid to your Zojapay wallet monthly ',
  },
];

// TOJOIN SECTION
export const toJoin = [
  'Be passionate about earning extra income.',
  'Be interested in adding value and learning new things while networking with like minds.',
  'Be passionate about innovation and financial inclusion.',
  'Be enthusiastic about teamwork and collaboration.',
];

// BENEFITS SECTION
export const benefits = [
  {
    title: 'Exciting branding items.',
    content: 'Ambassadors get swag items to show off and share with friends.',
    image: Gift,
  },
  {
    title: 'Obtain a certificate of participation',
    content:
      'Get certified as an authorized ambassador and other training certifications.',
    image: Badge,
  },
  {
    title: 'Exclusive to Zojapay events',
    content: 'Get exclusive invites to all Zojapay events.',
    image: Calendar,
  },
  {
    title: 'Endless earning opportunities',
    content:
      'Refer and earn as much as you can. By being an ambassador, you have an extra source of income which when actively done will become a major source of income.',
    image: Safe,
  },
];

// TESTIMONIAL SECTION
export const testimonials = [
  {
    name: 'John Ovu',
    handle: 'john_ovu',
    image: personImage,
    testimony:
      'Being a Zojapay’s ambassador has taught me about leadership and teamwork. I’m always glad to preach the gospel about Zojapay. Most importantly, it has helped me earn extra income through the referral program',
    bgColor: 'bg-[#FFF6EE]',
  },
  {
    name: 'Cassandra Onyenjen',
    handle: 'cassy_o',
    image: Cassy,
    testimony:
      "Being a Zojapay ambassador has allowed me to connect with other fintech enthusiasts and stay up-to-date on the latest trends in financial technology. It's been an incredibly rewarding experience, and I'm proud to spread the word about Zojapay's innovative solutions.",
    bgColor: 'bg-[#ECFBEC]',
  },
  {
    name: 'Andrew Chidi',
    handle: '_drew_magic',
    image: andrewImage,
    testimony:
      "Thanks to Zojapay's ambassador program, I've had the chance to expand my knowledge of the fintech industry, attend exciting events, and connect with other passionate individuals, while also making good money through the ambassador referral program ",
    bgColor: 'bg-[#FDF3F6]',
  },
];
