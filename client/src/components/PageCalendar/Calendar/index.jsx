import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

export default function index(props) {
    return (
        <Jumbotron>
                <div className="text-center border border-dark p-5">
                    <h2>Let's Get Started</h2>
                    <hr />
                    <h5>Host your next event in one of the Historic rooms at Bartlett Venue!</h5>
                    <br />
                    <input
                        type="date"
                        name="search"
                        onChange={props.handleInputChange}
                        value={props.search}
                        placeholder="MM/DD/YYYY"
                        id="search" />
                        <br /><br />
                    <Button variant="primary" onClick={props.handleFormSubmit} >Next ></Button>
                </div>
            </Jumbotron>
    )
}
