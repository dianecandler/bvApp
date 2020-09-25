import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function index() {
    return (
        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Row>
                <Col>
                    <h3>Contact Bartlett Venue</h3>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="First Name" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Last Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="Phone" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Email" />
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your interest?</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                    <Row className="d-flex justify-content-center">
                                        <p><br /><Button variant="primary">Send Request</Button><br /></p>
                                    </Row>
                                </Form>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    )
}

// !send function from portfolio
// import React from "react";

// export default class ContactForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.submitForm = this.submitForm.bind(this);
//         this.state = {
//             status: ""
//         };
//     }

//     render() {
//         const { status } = this.state;
//         return (
//             <form
//                 onSubmit={this.submitForm}
//                 action="https://formspree.io/xaypkdpv"
//                 method="POST"
//             >
//                 <div className="form-group">
//                     <input type="text" name="name" className="form-control" placeholder="Name" />
//                 </div>
//                 <div className="form-group">
//                     <input type="email" name="email" className="form-control" required="" placeholder="Email *" />
//                 </div>
//                 <div className="form-group">
//                     <textarea type="text" rows="3" name="message" className="form-control" placeholder="Message"></textarea>
//                 </div>
//                 {status === "SUCCESS" ? <p>Thank you from your time and consideration!</p> : <button className="btn">Contact me</button>}
//                 {status === "ERROR" && <p>Ooops! There was an error.</p>}
//             </form>
//         );
//     }

// submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState !== XMLHttpRequest.DONE) return;
//         if (xhr.status === 200) {
//             form.reset();
//             this.setState({ status: "SUCCESS" });
//         } else {
//             this.setState({ status: "ERROR" });
//         }
//     };
//     xhr.send(data);
// }
