import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Map from './Map.png';

export default function index() {
    return (
        <Container fluid style={{marginTop:'2rem', marginBottom:'2rem'}}>
            <Row>
                <Col>         
            <img src={Map} style={{width:'100vw'}} />
                </Col>
            </Row>
        </Container>
    )
}
