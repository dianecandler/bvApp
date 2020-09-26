import React from 'react';
import Products from './Products';
import Testimonials from '../Testimonials';
import CTA from './CTA';
import Map from '../Map';
import Contact from '../Contact';

export default function index() {
    return (
        <div style={{paddingTop: '2rem'}}>
            <Products />
            <Testimonials />
            <CTA />
            <Map />
            <Contact />
        </div>
    )
}
