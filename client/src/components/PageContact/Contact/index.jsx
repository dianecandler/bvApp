// Inquire form - collection for user data/questions and sends business email
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const building = <FontAwesomeIcon icon={faBuilding} />
const email = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} />

export default function index() {
    return (
        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Row>
                <Col>
                    <h3>Inquire about hosting your event at Bartlett Venue</h3>
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{color: 'var(--info)'}}>First Name</Form.Label>
                                                <Form.Control placeholder="First Name" />
                                                </Form.Group>
                                        </Col>
                                            <Col xs={6}>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{color: 'var(--info)'}}>Last Name</Form.Label>
                                                <Form.Control placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{color: 'var(--info)'}}>Email</Form.Label>
                                                <Form.Control placeholder="company@mail.com" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={6}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label style={{color: 'var(--info)'}}>Phone</Form.Label>
                                                <Form.Control placeholder="+1 234 567 8900" />
                                                </Form.Group>
                                            </Col>
                                    </Row>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{color: 'var(--info)'}}>Your interest?</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                        <Row className="d-flex justify-content-center">
                                            <p><br /><Button variant="primary">Send Request</Button><br /></p>
                                        </Row>
                                </Form>
                            </Col>
                                <Col>
                                <p>Send us an email or give us a call to see how we can help you with your next event, party, meeting, or wedding!</p>
                                <br />
                                <h4><span>{map}</span> 107 East Clark Street, Bartlett, TX 76500</h4>
                                <br/>
                                <h4><span>{building}</span> P.O.Box 9, Bartlett, TX 76500</h4>
                                <br/>
                                <h4><span>{email}</span> hello@bartlettvenue.com</h4>
                                <br/>
                                <h4><span>{phone}</span> +1 512 964 9473</h4>

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
