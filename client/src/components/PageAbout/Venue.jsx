import React from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import Table from "./tableLandscape.jpg";
import PRone from "./Gallery9.jpg";
import PRtwo from "./Photo4.jpg";
import PRthree from "./Gallery1.jpg";
import MMone from "./MM_About1.jpg";
import MMtwo from "./MM_About2.jpg";
import MMthree from "./MM_About3.jpg";

export default function Venue() {
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
					<Col
						style={{
							textAlign: "center",
							paddingTop: "1.5rem",
							paddingBottom: "1.5rem",
						}}
					>
						<h3>We are here to help you host your next event!</h3>
						<p style={{ paddingTop: "1.5rem" }}>
							The owner fell in love with Bartlett and purchased a 1920s home
							before investing in these buildings. They had been used as a
							residence then were left unused for some time. Professionally
							remodeled with modern features while restoring their original
							vintage beauty. Built in 1903. Metal door plates indicate this
							storefront owner had prominance or the building was built for
							upscale goods.
						</p>
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<CardGroup>
							<Card>
								<Card.Img variant='top' src={PRone} />
							</Card>
							<Card>
								<Card.Img variant='top' src={PRtwo} />
							</Card>
							<Card>
								<Card.Img variant='top' src={PRthree} />
							</Card>
						</CardGroup>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col
						style={{
							textAlign: "center",
							paddingTop: "1.5rem",
							paddingBottom: "1.5rem",
						}}
					>
						<p
							style={{
								paddingBottom: "none",
								paddingTop: "1rem",
								paddingLeft: "2rem",
								paddingRight: "1rem",
							}}
						>
							<strong>Pesky Rabbit</strong> has been a cafe. Deeds from years
							back list the building as the City Cafe. Locals still remember
							dining here. If you look closely, you will find a menu painted on
							the wall. With the antique bar, cast iron street lamps, vintage
							Jim Beam Whiskey Barrels and Singer Sewing Machine tables helps
							you feel like you are stepping back into the past.
						</p>
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<CardGroup>
							<Card>
								<Card.Img variant='top' src={MMone} />
							</Card>
							<Card>
								<Card.Img variant='top' src={MMtwo} />
							</Card>
							<Card>
								<Card.Img variant='top' src={MMthree} />
							</Card>
						</CardGroup>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col
						style={{
							textAlign: "center",
							paddingTop: "1.5rem",
							paddingBottom: "1.5rem",
						}}
					>
						<p
							style={{
								paddingTop: "1rem",
								paddingLeft: "2rem",
								paddingRight: "1rem",
							}}
						>
							<strong>Mockingbird Market</strong> still has the same display
							windows used when the building was first opened in 1903. Ship lath
							covers the original ceiling and back walls. Side walls are red
							brick with some plaster exposing original bricks underneath.
							Ceilings are painted a soft white while the back wall is painted
							"warm biscuits" and trimmed in white. The 40 foot white, hand
							carved display case along one of the two long walls has been in
							the building for many years. Shelves are removable and with glass
							doors, can be used for displaying photos and memoriabilia to
							enhance and personalize your event.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
