// Information about area, carousel of area interests
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import Image4 from "./Image4.jpg";
import Image5 from "./Image5.jpg";

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
					<Col sm={12} md={6} lg={6} style={{fontSize:"small"}}>
						<h4>About Bartlett, TX</h4>
						<p>
							The Bartlett Historic District, listed on the National Register of
							Historic Places, stands as a cohesive group of early 1900s
							commercial buildings, and reflects the town's prosperity achieved
							during the early 20th century as a cotton shipping center in
							central Texas. Nearly 90 percent of the buildings in the district
							are historically significant. Bartlett is named for John T.
							Bartlett, who with J. E. Pietzsch donated the land for a townsite.
						</p>

						<p>
							Photographers &amp; movie makers alike find this charming historic
							area an ideal backdrop. This is a hot spot for movie making!
						</p>
						<h4>Movies Shot Here</h4>
						<p>
							“The Lost Husband” w/Josh Duhamel &amp; Leslie
							Bibb, “The Stars Fell on Henrietta” with Robert Duvall &amp; Brian
							Dennehy, remake of “True Grit” w/Jeff Bridges &amp; Matt Damon,
							“Walking Dead”, "Revolution", "The Whole Wide World" w/Renee
							Zellweger, "The Newton Boys" w/Matthew McDonaughey, "Texas
							Justice" w/Peter Strauss &amp; Heather Locklear, plus others.
						</p>

						<p>
							Find all 6 historic murals...figure out which were added in the
							days of the Model T while others for movie sets. Enjoy exploring
							downtown!
						</p>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<Carousel>
							<Carousel.Item>
								<img className='d-block w-100' src={Image2} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={Image3} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={Image1} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={Image4} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={Image5} alt='First slide' />
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
