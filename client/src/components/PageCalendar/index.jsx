// Calendar drives available product options then shares booking or Registration followed by Confirmation.
import React from 'react';
import CTA from './CTA';
import Products from './Products';
import Registration from './Registration';

export default function index() {
    return (
        <div>
            <CTA />
            <Products />
            {/* add login to load the Registration and subsequent Confirmation here */}
            <Registration />
        </div>
    )
}
