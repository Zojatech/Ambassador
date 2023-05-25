import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer.js';
import Faqs from '@/components/Faqs';
import ReactPixel from 'react-facebook-pixel';
import dotenv from 'dotenv';


function App() {
// Load the environment variables
dotenv.config();

// Initialize the Facebook Pixel
ReactPixel.init(process.env.REACT_APP_PIXEL_ID);

// Track a page view
ReactPixel.pageView();

  return (
    <div>
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
