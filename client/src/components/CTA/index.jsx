import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default function index() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center border border-dark p-5">
                            <h2>Host your next event here!</h2>
                            <h5>Bartlett Venue offers a unique main street storefront setting in historic Bartlett, Texas.</h5>
                            <hr/>
                            <p style={{marginLeft:"10%", marginRight: "10%"}}>Minutes from Georgetown and Temple, this venue nestled between Cattle Ranches, Cotton Farms. This well preserved Historic District is perfect for those seeking vintage character, modern comforts, and a unique setting!</p>
                            <br/>
                            <p style={{fontSize: 'extra small'}}><Button variant="primary">Get Started</Button></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
