import React from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Wrapper/Hero';
import CTA from './components/CTA';
import Cards from './components/Products';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CTA />
      <Cards />
      <Testimonials />
      <Gallery />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
