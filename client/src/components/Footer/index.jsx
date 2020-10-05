
import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Terms from './terms.pdf';
import FAQ from './faq.pdf';
import Diane from './diane.jpg';

export default function index() {
  return (
    <div className="section $light-gray bg-light">
      <Container style={{marginTop:'4rem', padding:'1rem'}}>
      <br/>
        <Row>
          <Col xs={3} md={3}>
            Bartlett Venue
          </Col>
          <Col xs={3} md={3}>
          <a href={FAQ} target="_blank" rel="noopener noreferrer" >FAQs</a>
          </Col>
          <Col xs={3} md={3}>
          <a style={{marginLeft:'2rem'}} href={Terms} target="_blank" rel="noopener noreferrer" >Terms &amp; Conditions</a>
          </Col>
          <Col xs={3} md={3}>
          <a style={{marginLeft:'2rem'}} href={Terms} target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
          </Col>
        </Row>
        <Row>
        <p>2020 Copyright &copy;  designed by Diane Candler<Image src={Diane} thumbnail /></p>
        </Row>
      </Container>
    </div>
  )
}
