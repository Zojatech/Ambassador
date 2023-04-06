import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer.js';
import Faqs from '@/components/Faqs';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
