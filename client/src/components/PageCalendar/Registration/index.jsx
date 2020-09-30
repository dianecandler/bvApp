import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Radio } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Image from './BlackWhite.jpg';

const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const building = <FontAwesomeIcon icon={faBuilding} />
const email = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} />

export default function index() {
    return (
        <Container style={{ marginTop: '8rem', marginBottom: '2rem' }}>
            <Row>
                <Col>
                    <h3>Please complete and submit your reseration request.</h3>
                    <br /><br />
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ color: 'var(--info)' }}>First Name</Form.Label>
                                                <Form.Control placeholder="First Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ color: 'var(--info)' }}>Last Name</Form.Label>
                                                <Form.Control placeholder="Last Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ color: 'var(--info)' }}>Email</Form.Label>
                                                <Form.Control placeholder="company@mail.com" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{ color: 'var(--info)' }}>Phone</Form.Label>
                                                <Form.Control placeholder="+1 234 567 8900" />
                                            </Form.Group>
                                        </Col>
 
                                    </Row>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ color: 'var(--info)' }}>Describe your event.<br />Event title, number of guests, type of party, food plan, seated or cocktail, alcohol served, event hours, special needs, etc.</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ color: 'var(--info)' }}>Questions?</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                    <Row style={{ paddingLeft: '1rem' }}>
                                            <Col>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Terms &amp; Conditions" <a href={Terms} target="_blank" rel="noopener noreferrer" >Terms and Conditions</a>/>
                                                             
         
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Privacy Policy" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Validated All Information" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    <Row className="d-flex justify-content-center">
                                        <p><br /><Button variant="primary">SUBMIT</Button><br /></p>
                                    </Row>
                                </Form>
                            </Col>
                            <Col>
                                <img
                                    className="d-block w-35"
                                    src={Image}
                                    alt="Pesky Rabbit"
                                />
                                <p>Look for an email confirming your reservation request.  Try your spam or junk folder if you do not see your confirmation email.</p>
                                <p>To hold your reservation, we must receive your event deposit.  We will contact you for your deposit.</p>
                                <h5><span>{map}</span> 107 East Clark Street, Bartlett, TX 76500</h5> <br />
                                <h5><span>{building}</span> P.O.Box 9, Bartlett, TX 76500</h5>                                  <br />
                                <h5><span>{email}</span> hello@bartlettvenue.com</h5><br />
                                <h5><span>{phone}</span> +1 512 964 9473</h5>
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    )
}

