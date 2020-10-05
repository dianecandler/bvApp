// Gallery of photos for HomePage
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
// import {1x800x599} from './';
// import {5x600x799} from "./BandPoster.jpg"

export default function index() {
	return (
		<Container>
			<br /><br /><br />
			<Row>
				<Col className='text-center'>
					<h3>Gallery</h3>
					<h6>
						Wedding - Quinceanera - Family Reunion - Business Meeting -
						Christmas Party - Private Dinner - Retirement Celebration - Briday
						Shower
					</h6>
					<h6>
						Birthday Party - Baptism Celebration - Holiday Party - Baby Shower -
						Graduation Celebration
					</h6>
					<br />
				</Col>
			</Row>
			<Row>
				<Gallery photos={photos} />
			</Row>
			<Row className='d-flex justify-content-center'>
				<p>
					<br />
					<Button
						variant='primary'
						onClick={() => {
							window.location.replace("/inquire");
						}}
					>
						Book a Tour
					</Button>
					<br />
				</p>
			</Row>
			<br /><br /><br />
		</Container>
	);
}
