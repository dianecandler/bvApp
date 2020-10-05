// Brings together Area information, photo gallery, map, and email inquiry, Book a Tour CTA
import React from 'react';
import Venue from './Venue';
import Bartlett from '../Bartlett';
// import Gallery from '../Gallery';
import Map from '../Map';
import Parallax from '../Parallax';
import CTA from './CTA';

import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Parallax />
            <Venue />
            <Bartlett />
            {/* <Gallery /> */}
            <Map />
            <CTA />
            <Contact />
        </div>
    )
}
