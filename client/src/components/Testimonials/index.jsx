import React from "react";
import Client1 from "./moms.jpg";
import Client2 from "./Client2.jpg";
import Client3 from "./Client3.jpg";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

export default function index() {
	return (
		<section
			style={{
				paddingTop: "6rem",
				paddingBottom: "6rem",
				backgroundColor: "#e9ecef",
			}}
		>
			<Carousel>
				<Carousel.Item>
					<Container className='border border-dark p-3'>
						<Row>
							<Col style={{ height: "50vh" }}>
								<img className='w-100' src={Client1} alt='client photo1' />
							</Col>
							<Col>
								<Card style={{ border: "none" }}>
									<Card.Header>Wedding Ceremony and Reception</Card.Header>
									<Card.Body>
										<blockquote className='blockquote mb-0'>
											<p>
												Mockingbird Market was the perfect place for our kids'
												wedding ceremony. We enjoyed bringing personal items and
												decorating the windows and display cabinet. Pesky Rabbit
												was awesome for the reception and dance. We set up Corn
												Hole in the Garden. Such an easy event. We even set up
												our BBQ grill in the alley.
											</p>
											<footer className='blockquote-footer'>
												Mary Gallander and Family{" "}
												<cite title='Source Title'></cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
				<Carousel.Item>
					<Container className='border border-dark p-3'>
						<Row>
							<Col style={{ height: "50vh" }}>
								<img className='w-100' src={Client2} alt='client photo2' />
							</Col>
							<Col>
								<Card style={{ border: "none" }}>
									<Card.Header>Independence Day Celebration</Card.Header>
									<Card.Body>
										<blockquote className='blockquote mb-0'>
											<p>
												We decided to bring family together to celebrate
												Independence Day this year. We rented the Pesky Rabbit
												and brought in our own BBQ with all the fixings. We used
												their system to play music and at the end of the evening
												we all went outside to light up sparklers. Such a
												relaxing place. Love the brick streets and old
												buildings. Very cool. We will return!
											</p>
											<footer className='blockquote-footer'>
												Christine and Carol{" "}
												<cite title='Source Title'>
													, Dry Family Party Planner
												</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
				<Carousel.Item>
					<Container className='border border-dark p-3'>
						<Row>
							<Col style={{ height: "50vh" }}>
								<img className='w-100' src={Client3} alt='client photo3' />
							</Col>
							<Col>
								<Card style={{ border: "none" }}>
									<Card.Header>Baby Shower</Card.Header>
									<Card.Body>
										<blockquote className='blockquote mb-0'>
											<p>
												Our first grandchild is expected anytime. We decided to
												give our daughter a very special baby shower and rented
												Mockingbird Market. What a great place with wonderful
												light. Our snapshots turned out amazing thanks to all
												the natural light. We looked like professional
												photographers! Lovely time &amp; great venue hosts.
												Plenty of parking. Easy planning. Highly recommend this
												place!
											</p>
											<footer className='blockquote-footer'>
												Cathy Umiker
												<cite title='Source Title'>
													, Jessica's proud Grandmother
												</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
			</Carousel>
		</section>
	);
}
