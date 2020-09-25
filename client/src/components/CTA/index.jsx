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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla harum inventore rerum, quaerat itaque numquam enim, perferendis dicta necessitatibus blanditiis impedit facilis esse soluta error asperiores in eum doloremque beatae.</p>
                            <p><Button variant="primary">Book Now</Button></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
