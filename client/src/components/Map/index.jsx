import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './Map.png';

export default function index() {
    return (
        <Container fluid style={{marginTop:'2rem', marginBottom:'2rem'}}>
            <Row>
                <Col>
                    <a href="https://www.google.com/maps/place/117+E+Clark+St,+Bartlett,+TX+76511/@30.7758716,-97.6572571,10.33z/data=!4m5!3m4!1s0x864518a2d41060e5:0xb2bb994eb9d3cd0c!8m2!3d30.7950734!4d-97.4277976" target="_blank" rel="noopener noreferrer"><img src={Map} style={{width:'100%'}} alt="" /></a>
                </Col>
            </Row>
        </Container>
    )
}
