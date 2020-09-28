import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { PSWaiver } from "../PSWaiver.pdf"

export default function index() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h3>Photoshoot Gallery</h3>
                    <br />
                    <p style={{ color: 'light-grey' }}>Experience the architecture and drama of these 120-year-old retail buildings in the Bartlett Downtown Historic District.  Come find out why movie makers keep returning to this main street American hometown.  Take advantage of the charm of the Pesky Rabbit, elegance of Mockingbird Market, beautiful Garden area, and archecture on our bricked streets and interesting alleys.</p>
                    <br />
                </Col>
            </Row>
            <Row>
                <Gallery photos={photos} />
            </Row>
            <Row className="d-flex justify-content-center" style={{paddingTop: '2rem'}}>        
                    <h2 style={{ textAlign: "center" }}>Book Your Photoshoot</h2>
                    <p style={{ color: 'light-grey' }}>
                        Histori Downtown Bartlett offers numerous opportunities for unique photos and the Bartlett Venue is an ideal backdrop for amateurs and professional photographers.  Spend your two hours in the Pesky Rabbit, Mockingbird Market, Garden then explore the historic downtorn and rural farm and ranch land surrounding the area.
                    </p>
                    <Row>
                        <Col xs={3}>
                            <h3>$100/two hours</h3>
                        </Col>
                        <Col xs={9}>
                            <p>Enjoy the recently restored murals around Bartlett including the 1920 vintage mural on the alley wall of Mockingbird Market.</p>
                        </Col>
                    </Row>
                    <Row style={{paddingBottom: '2rem'}}>
                        <h5>For more informatoin or to schedule a photoshoot, please submit your request and sign the Photoshoot Waiver.  We will reply with a detailed email regarding scheduling, payment, and waivers for all on-site guests.</h5>
                    </Row>
                         <br /><br />
                    <Row style={{ justifyContent: 'center', fontSize: '10px' }}>
                        <p><br /><Button variant="primary">Book Now</Button><br /></p>
                        <p style={{paddingLeft: '2rem'}}><br /><Button variant="primary"href={PSWaiver} target="_blank" >Photoshoot Waiver</Button><br /> </p>
                    </Row>
            </Row>
        </Container >
    )
}
