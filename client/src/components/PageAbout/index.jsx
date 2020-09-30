import React from 'react';
import Venue from './Venue';
import Bartlett from '../Bartlett';
// import Gallery from '../Gallery';
import Map from '../Map';
import VendorCards from './VendorCards';
import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Venue />
            <Bartlett />
            {/* <Gallery /> */}
            <Map />
            <VendorCards />
            <Contact />
        </div>
    )
}
