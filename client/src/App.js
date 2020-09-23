import React from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Wrapper/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
