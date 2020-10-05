// Map with link to Google to request directions - used on HomePage, VenuePage, AboutPage
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function index() {
    return (
        <Container fluid style={{marginTop:'2rem', marginBottom:'2rem', backgroundColor:'#FFFFFF'}}>
                        <br /><br /><br /><br />
            <Row>
          <a href={FAQ} target="_blank" rel="noopener noreferrer" >FAQs</a>
          <a style={{marginLeft:'2rem'}} href={Terms} target="_blank" rel="noopener noreferrer" >Terms &amp; Conditions</a>
          <a style={{marginLeft:'2rem'}} href={Terms} target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
            </Row>
            <br /><br /><br /><br />
        </Container>
    )
}
