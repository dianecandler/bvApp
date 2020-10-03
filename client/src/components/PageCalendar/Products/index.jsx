import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	CardDeck,
	Card,
	Button,
	ListGroup,
} from "react-bootstrap";
import Garden from "./garden.jpg";
import MM from "./mb.jpg";
import PR from "./pr.jpg";
import API from "../../../utils/API";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			savedData: [],
			date: props.date,
			productId: props.productId,
			id1: props.date + "-1",
			id2: props.date + "-2",
			id3: props.date + "-3",
		};
	}

	componentDidMount() {
		API.savedData()
			.then((savedData) => this.setState({ savedData: savedData }))
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
				<Row style={{ marginBottom: "2rem" }}>
					<Button onClick={this.props.backToCalendar}>Back to Calendar</Button>
				</Row>
				<Row>
					<Col>
						<Container>
							<CardDeck>
								<Card>
                                <Card.Title><h2>Pesky Rabbit</h2></Card.Title>
									<Card.Img variant='top' src={PR} />
									<Card.Body>
										<Card.Title>Capacity 1800 square feet</Card.Title>
										<Card.Text>
											Socialize around the antique bar or one of the vintage Jim
											Beam Whiskey Barrels.
										</Card.Text>
										<ListGroup>
											<ListGroup.Item>Seats 50, Room Seats 75</ListGroup.Item>
											<ListGroup.Item>Cocktail style - 120</ListGroup.Item>
											<ListGroup.Item>
												Pricing includes set-up/clean-up
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours Sunday - Friday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours - Saturday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for per additional hour
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
									<Card.Footer style={{ textAlign: "center" }}>
										{this.state.savedData
											.map((data) => data._id)
											.includes(this.state.id3) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : this.state.savedData
												.map((data) => data._id)
												.includes(this.state.id1) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : (
											<Button
												variant='primary'
												value={this.state.id1}
												onClick={this.props.buttonPR}
											>
												Book Now
											</Button>
										)}
									</Card.Footer>
								</Card>
								<Card>
                                <Card.Title><h2>Mockingbird Market</h2></Card.Title>
									<Card.Img variant='top' src={MM} />
									<Card.Body>
										<Card.Title>Capacity 1200 square feet</Card.Title>
										<Card.Text>
											Elegance and Charm . . . Ideal for weddings, showers,
											brunches, and busienss or charity meetings.
										</Card.Text>
										<ListGroup>
											<ListGroup.Item> Room seats 50</ListGroup.Item>
											<ListGroup.Item>Cocktail style - 75</ListGroup.Item>
											<ListGroup.Item>
												Pricing includes set-up/clean-up
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours Sunday - Friday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours - Saturday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for per additional hour
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
									<Card.Footer style={{ textAlign: "center" }}>
										{this.state.savedData
											.map((data) => data._id)
											.includes(this.state.id3) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : this.state.savedData
												.map((data) => data._id)
												.includes(this.state.id2) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : (
											<Button
												variant='primary'
												value={this.state.id2}
												onClick={this.props.buttonPR}
											>
												Book Now
											</Button>
										)}
									</Card.Footer>
								</Card>
								<Card>
                                <Card.Title><h2>All Inclusive</h2></Card.Title>
									<Card.Img variant='top' src={Garden} />
									<Card.Body>
										<Card.Title>Capacity 3000 square feet</Card.Title>
										<Card.Text>
											Includes Pesky Rabbit &amp; Mockingbird Market plus the
											Garden and Photoshoot.
										</Card.Text>
										<ListGroup>
											<ListGroup.Item>Rooms seats 125</ListGroup.Item>
											<ListGroup.Item>Cocktails style - 200</ListGroup.Item>
											<ListGroup.Item>
												Pricing includes set-up/clean-up
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours Sunday - Friday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for 4 hours - Saturday
											</ListGroup.Item>
											<ListGroup.Item>
												$xxx for per additional hour
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
									<Card.Footer style={{ textAlign: "center" }}>
										{this.state.savedData
											.map((data) => data._id)
											.includes(this.state.id1) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : this.state.savedData
												.map((data) => data._id)
												.includes(this.state.id2) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : this.state.savedData
												.map((data) => data._id)
												.includes(this.state.id3) ? (
											<Button variant='secondary' disabled>
												Booked
											</Button>
										) : (
											<Button
												variant='primary'
												value={this.state.id3}
												onClick={this.props.buttonPR}
											>
												Book Now
											</Button>
										)}
									</Card.Footer>
								</Card>
							</CardDeck>
						</Container>
					</Col>
				</Row>
			</Container>
		);
	}
}
