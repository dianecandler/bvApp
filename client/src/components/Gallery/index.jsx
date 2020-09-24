import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function index() {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Gallery</h3>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non, exercitationem delectus, ducimus minus laboriosam quisquam magni recusandae, voluptatum repellat debitis cumque at officiis amet doloribus rem quo inventore fugit.</h6>
                </Col>
            </Row>
            <Row>
                <Gallery photos={photos} />;
            </Row>
            <Row>
                <p><Button variant="primary">Book a Tour</Button></p>
            </Row>
        </Container>
    )
}
