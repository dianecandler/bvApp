import React from 'react';
import Client1 from './hero1.jpg';
import {Carousel, Container, Row, Col, Card, } from 'react-bootstrap';

export default function index() {
    return (
        <Carousel className="mt-5 mb-5">
            <Carousel.Item>
                <Container className="border border-dark p-3">
                    <Row>
                        <Col><img className="w-100" src={Client1} /></Col>
                        <Col>
                            <Card style={{border: "none"}}>
                                <Card.Header>Quote</Card.Header>
                                <Card.Body style={{backgroundColor: "#cdd7d6ff"}}>
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="border border-dark p-3">
                    <Row>
                        <Col><img className="w-100" src={Client1} /></Col>
                        <Col>
                        <Card style={{border: "none"}}>
                                <Card.Header>Quote</Card.Header>
                                <Card.Body style={{backgroundColor: "#cdd7d6ff"}}>
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="border border-dark p-3">
                    <Row>
                        <Col><img className="w-100" src={Client1} /></Col>
                        <Col>
                        <Card style={{border: "none"}}>
                                <Card.Header>Quote</Card.Header>
                                <Card.Body style={{backgroundColor: "#cdd7d6ff"}}>
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    )
}
