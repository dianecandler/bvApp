// CTA is a call to action, encouraging bookings, button moves users to Calendar to start booking
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

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
						<div className='text-center border border-dark p-5'>
							<h2>Host your next event here!</h2>
							<h5>
								Bartlett Venue offers a unique storefront setting in historic
								Bartlett, Texas.
							</h5>
							<hr />
							<p style={{ marginLeft: "10%", marginRight: "10%" }}>
								Just north of Austin. Minutes from Georgetown &amp; Temple.
								Bartlett is nestled between Cattle Ranches &amp; Cotton Farms.
								This well preserved Historic District is perfect for those
								seeking vintage character, modern comforts, and a unique
								setting!
							</p>
							<br />
							<p style={{ fontSize: "extra small" }}>
								<Button
									variant='primary'
									onClick={() => {
										window.location.replace("/inquire");
									}}
								>
									Get Started
								</Button>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
