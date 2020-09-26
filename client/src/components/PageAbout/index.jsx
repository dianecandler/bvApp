import React from 'react';
import Welcome from './Welcome';
import Bartlett from '../Bartlett';
import Todo from './Todo';
import CTA from '../CTA';
import Map from '../Map';
import Contact from '../Contact';

export default function index() {
    return (
        <div>
            <Welcome />
            <Bartlett />
            <Todo />
            <CTA />
            <Map />
            <Contact />
        </div>
    )
}
