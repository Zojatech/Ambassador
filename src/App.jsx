import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  );
}

export default App;
