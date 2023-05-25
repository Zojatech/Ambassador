import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer.js';
import Faqs from '@/components/Faqs';
import ReactPixel from 'react-facebook-pixel';
// import dotenv from 'dotenv';
import FacebookPixel from '@/components/FacebookPixel';

function App() {
  const pixelId = import.meta.env.VITE_REACT_APP_PIXEL_ID;

  // Initialize the Facebook Pixel
  ReactPixel.init(pixelId);

  // Track a page view
  ReactPixel.pageView();

  return (
    <div>
      <FacebookPixel pixelId={pixelId} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
