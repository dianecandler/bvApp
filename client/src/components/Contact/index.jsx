// Inquire form - collection for user data/questions and sends business email
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faBuilding,
} from "@fortawesome/free-solid-svg-icons";
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const building = <FontAwesomeIcon icon={faBuilding} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;

export default function index() {
	return (
		<Container style={{backgroundColor: 'white'}}>
		<Container style={{marginTop: "4rem", marginBottom: "4rem", padding: '4rem', border: "1px solid gray"}}>
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
											<Form.Group controlId='exampleForm.ControlTextarea1'>
												<Form.Label style={{ color: "var(--info)" }}>
													First Name
												</Form.Label>
												<Form.Control placeholder='First Name' />
											</Form.Group>
										</Col>
										<Col xs={6}>
											<Form.Group controlId='exampleForm.ControlTextarea1'>
												<Form.Label style={{ color: "var(--info)" }}>
													Last Name
												</Form.Label>
												<Form.Control placeholder='Last Name' />
											</Form.Group>
										</Col>
										<Col xs={6}>
											<Form.Group controlId='exampleForm.ControlTextarea1'>
												<Form.Label style={{ color: "var(--info)" }}>
													Email
												</Form.Label>
												<Form.Control placeholder='company@mail.com' />
											</Form.Group>
										</Col>
										<Col xs={6}>
											<Form.Group controlId='exampleForm.ControlTextarea1'>
												<Form.Label style={{ color: "var(--info)" }}>
													Phone
												</Form.Label>
												<Form.Control placeholder='+1 234 567 8900' />
											</Form.Group>
										</Col>
									</Row>
									<Form.Group controlId='exampleForm.ControlTextarea1'>
										<Form.Label style={{ color: "var(--info)" }}>
											Your interest?
										</Form.Label>
										<Form.Control as='textarea' rows='3' />
									</Form.Group>
									<Row className='d-flex justify-content-center'>
										<p>
											<br />
											<Button variant='primary'>Send Request</Button>
											<br />
										</p>
									</Row>
								</Form>
							</Col>
							<Col>
								<p  style={{fontSize: 'small'}}>
									How we can help you with your next event, party, meeting, or
									wedding!
								</p>
								<hr />
								<h4>
									<span>{map}</span> 107 East Clark Street, Bartlett, TX 76511
								</h4>
								<br />
								<h4>
									<span>{building}</span> P.O.Box 9, Bartlett, TX 76500
								</h4>
								<br />
								<h4>
									<span>{phone}</span> +1 662 546 4511 or Mockingbird 511
								</h4>

								<br />
								<h4>
									<span>{email}</span> hello@bartlettvenue.com
								</h4>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
		</Container>
	);
}
