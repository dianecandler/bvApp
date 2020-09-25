
import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Terms from './terms.pdf';
import FAQ from './faq.pdf';
import Diane from './diane.jpg';

export default function index() {
  return (
    <div className="section $light-gray bg-light">
      <Container style={{marginTop:'4rem', padding:'1rem'}}>
        <Row>
          <Col xs={6} md={3}>
          <a href={FAQ} target="_blank" >FAQs</a>
          <a style={{marginLeft:'2rem'}} href={Terms} target="_blank">Terms and Conditions</a>
          </Col>
          <Col xs={6} md={9}>
          <p>2020 Copyright &copy;  designed by Diane Candler<Image src={Diane} thumbnail /></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
