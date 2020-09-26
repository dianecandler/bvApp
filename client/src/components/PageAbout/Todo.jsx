import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Florist from './Florist.jpg';
import BankBNB from './BankBNB.jpg';
import CoC from './CoC.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const phone = <FontAwesomeIcon icon={faPhone} />
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const email = <FontAwesomeIcon icon={faEnvelope} />

export default function Todo() {
    return (
        <Container style={{ backgroundColor: '#e9ecef' }}>
            <Row style={{ paddingTop: '3rem', paddingBottom: '3rem', paddingRight: '5rem', paddingLeft: '4rem', marginLeft: '3rem', marginTop: '2rem', marginBottom: '4rem' }}>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BankBNB} />
                        <Card.Body>
                            <Card.Title>Stay in Bartlett</Card.Title>
                            <hr />
                            <Card.Text>
                                <strong>Bartlett National Bank Guest House</strong>
                                <ul>
                                    <li>Stay s 1/2 block from the venue in this 1904 bank, recently restored as a guest house.</li>
                                    <li>Look for this place on Expedia or Airbnb
                            <li>Entire house, 2 bedrooms, 2 baths, kitchen, and sleeps 6</li>
                                        <li>Enjoy getting to know the local area.</li>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Florist} />
                        <Card.Body>
                            <Card.Title>Amazing local Florist!</Card.Title>
                            <Card.Text>
                                <strong>Unique Celebrations</strong> located a 1/2 block from the venue
                                 <ul>
                                    <li style={{ listStyle: 'none', paddingBottom: '1rem' }}><span>{map}</span>  199 North Evie
                                    <li><span>{phone}</span>  +1 254 527 3394</li>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CoC} />
                        <Card.Body>
                            <Card.Title>More information</Card.Title>
                            <hr />
                            <Card.Text>
                                Visit the <strong>Bartlett Area Chamber of Commerce</strong> website for more about this historic city
                        <ul>
                                    <li>Look events such as Bands on the Bricks, Pistons on the Bricks, and more!
                            <li>Enjoy getting to know Bartlett and the local area.</li>
                                    </li>
                                    <li style={{ listStyle: 'none' }}><span>{email}</span>    bartletttxchamber.org</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
