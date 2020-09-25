import React from 'react';
import Hero from '../Wrapper/Hero';
import CTA from '../CTA';
import Cards from '../Products';
import Testimonials from '../Testimonials';
import Gallery from '../Gallery';
import Map from '../Map';
import Bartlett from '../Bartlett';
import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Hero />
            <CTA />
            <Cards />
            <Testimonials />
            <Gallery />
            <Map />
            <Bartlett />
            <Contact />
        </div>
    )
}
