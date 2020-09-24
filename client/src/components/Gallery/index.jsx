import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function index() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h3>Gallery</h3>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non, exercitationem delectus, ducimus minus laboriosam quisquam magni recusandae, voluptatum repellat debitis cumque at officiis amet doloribus rem quo inventore fugit.</h6>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Gallery photos={photos} />
            </Row>
            <Row className="d-flex justify-content-center">
                <p><br/><Button variant="primary">Book a Tour</Button><br/></p>
            </Row>
        </Container>
    )
}
