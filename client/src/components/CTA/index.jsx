import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default function index() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center border border-dark p-5">
                            <h1>Host your next event here!</h1>
                            <h6>Bartlett Venue offers a unique main street storefront setting in historic Bartlett, Texas.</h6>
                            <p>Minutes from Georgetown and Temple, Texas, this venue is perfect for those seeing vintage character, modern comforts, and a unique setting!</p>
                            <p style={{fontSize: 'extra small'}}><Button variant="primary">Book Now</Button></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
