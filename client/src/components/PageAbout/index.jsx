// Brings together Area information, photo gallery, map, and email inquiry, Book a Tour CTA
import React from 'react';
import Bartlett from '../Bartlett';
import Gallery from '../Gallery';
import Map from '../Map';
import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Bartlett />
            <Gallery />
            <Map />
            <Contact />
        </div>
    )
}
