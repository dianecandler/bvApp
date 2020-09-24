import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function index() {
    return (
        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Row>
                <Col>
                    <h3>Contact Bartlett Venue</h3>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="First Name" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Last Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="Phone" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Email" />
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your interest?</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                    <Row className="d-flex justify-content-center">
                                        <p><br /><Button variant="primary">Send Request</Button><br /></p>
                                    </Row>
                                </Form>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    )
}
