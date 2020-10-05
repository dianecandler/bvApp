// Inquire form - collection for user data/questions and sends business email
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from './ContactForm';
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
		<section
			style={{
				paddingTop: "6rem",
				paddingBottom: "6rem",
				backgroundColor: "#e9ecef",
			}}
		>
			<Container>
				<Row>
					<Col>
						<h3>Inquire about hosting your event at Bartlett Venue</h3>
						<br />
						<Container>
							<Row>
								<Col sm={12} md={6}>
									<ContactForm />
								</Col>
								<Col sm={12} md={6}>
									<p style={{ fontSize: "small" }}>
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
		</section>
	);
}
