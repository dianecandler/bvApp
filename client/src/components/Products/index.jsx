import React from "react";
import Cards from "./Cards";
import { Container, Row, Col } from "react-bootstrap";

export default function index() {
	return (
		<section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
			<Container>
				<Row>
					<Col>
						<Cards />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
