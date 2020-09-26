import React from 'react';
import Testimonials from '../Testimonials';
import Products from '../Products';
import CTA from '../CTA';
import Map from '../Map';
import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Products />
            <Testimonials />
            <CTA />
            <Map />
            <Contact />
        </div>
    )
}