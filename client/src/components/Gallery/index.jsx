// Gallery of photos for HomePage
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
// import {1x800x599} from './';
// import {5x600x799} from "./BandPoster.jpg"

export default function index() {
	return (
		<section
			style={{
				paddingTop: "6rem",
				paddingBottom: "6rem",
			}}
		>
			<Container>
				<Row>
					<Col className='text-center'>
						<h3 style={{ paddingBottom: "1.5rem" }}>Gallery</h3>
						<h6>
							Wedding - Quinceanera - Family Reunion - Business Meeting -
							Christmas Party - Private Dinner - Retirement Celebration - Briday
							Shower - Birthday Party - Baptism Celebration - Holiday Party - Baby Shower
							- Graduation Celebration
						</h6>
						<br />
					</Col>
				</Row>
				<Row>
					<Gallery photos={photos} />
				</Row>
				<Row className='d-flex justify-content-center'>
					<p style={{ paddingTop: "3rem" }}>
						<Button
							variant='primary'
							onClick={() => {
								window.location.replace("/inquire");
							}}
						>
							Book a Tour
						</Button>
					</p>
				</Row>
			</Container>
		</section>
	);
}
