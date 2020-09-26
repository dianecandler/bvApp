import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
// import {1x800x599} from './';
// import {5x600x799} from "./BandPoster.jpg"

export default function index() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h3>Photoshoot Gallery</h3>
                    <h6> unique photo opportunities . . </h6>
                    <p>Experience the architecture and drama of these 120-year-old retail builsings in the Bartlett Downtown Historic District.  Come find out why movie makers keep returning to this main street American hometown.  Take advantage of the charm of the Pesky Rabbit, elegance of Mockingbird Market, beautiful Garden area, and archecture on our bricked streets and interesting alleys.</p>
                    <br />
                </Col>
            </Row>
            <Row>
                <Gallery photos={photos} />
            </Row>
            <Row className="d-flex justify-content-center">
                <p><br /><Button variant="primary">Book a Tour</Button><br /></p>
            </Row>
        </Container>
    )
}
