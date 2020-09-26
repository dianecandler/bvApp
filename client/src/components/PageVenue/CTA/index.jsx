import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default function index() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <p style={{marginLeft:"10%", marginRight: "10%"}}>Minutes from Georgetown and Temple, Texas, this venue is perfect for those seeing vintage character, modern comforts, and a unique setting!</p>
                            <br/>
                            <p style={{fontSize: 'extra small'}}><Button variant="primary">Book Now</Button></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
