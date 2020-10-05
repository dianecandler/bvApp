// Map with link to Google to request directions - used on HomePage, VenuePage, AboutPage
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map.jpg";

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
					<Col sm={12} md={4} style={{ paddingBottom: "3rem" }}>
						<a
							href='https://www.google.com/maps/place/117+E+Clark+St,+Bartlett,+TX+76511/@30.7758716,-97.6572571,10.33z/data=!4m5!3m4!1s0x864518a2d41060e5:0xb2bb994eb9d3cd0c!8m2!3d30.7950734!4d-97.4277976'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={Map}
								alt='map of Bartlett area'
								style={{ width: "100%" }}
							/>
						</a>
						<h6 style={{ paddingTop: "1.5rem" }}>
							<a
								href='https://www.google.com/maps/place/117+E+Clark+St,+Bartlett,+TX+76511/@30.7758716,-97.6572571,10.33z/data=!4m5!3m4!1s0x864518a2d41060e5:0xb2bb994eb9d3cd0c!8m2!3d30.7950734!4d-97.4277976'
								target='_blank'
								rel='noopener noreferrer'
							>
								<strong>Get Directions</strong>
							</a>
						</h6>
					</Col>
					<Col sm={12} md={8}>
						<h4>Bartlett is minutes from . . .</h4>
						<br />
						<ul>
							<li>
								<strong>
									<a
										href='https://dales-essenhaus.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Dale's Essenhaus
									</a>
								</strong>
								in Walburg
							</li>
							<li>
								<strong>
									<a
										href='https://walburgrestaurant.net/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Walburg German Restaurant &amp; Biergarten
									</a>
								</strong>
								in Walburg
							</li>
							<li>
								<strong>
									<a
										href='https://www.txolive.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Central Texas Olive Ranch
									</a>
								</strong>
								outside Walburg
							</li>
							<li>
								<strong>
									<a
										href='https://www.facebook.com/cottoncountryclub/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Cotton Country Club
									</a>
								</strong>
								Dancehall in Granger on Hwy 95
							</li>
							<li>
								<strong>
									<a
										href='https://www.dancingbeewinery.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Dancing Bee
									</a>
								</strong>
								- the winery at
								<strong>
									<a
										href='https://www.walkerhoneyfarm.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Walker Honey Farm
									</a>
								</strong>
								in Rogers on Hwy 190
							</li>
							<li>
								<strong>
									<a
										href='https://www.sweeteats.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Sweet Eats Fruit Farm
									</a>
								</strong>
								on Hwy 29 in Georgetown
							</li>
							<li>
								<strong>
									<a
										href='https://barrowbrewing.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Barrow Brewing Company
									</a>
								</strong>
								and
								<strong>
									<a
										href='https://www.stagecoachsalado.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Stagecoach Inn
									</a>
								</strong>
								&amp; restaurant in Salado
							</li>
							<li>
								<strong>
									<a
										href='bartletttxchamber.org'
										target='_blank'
										rel='noopener noreferrer'
									>
										Bartlett Area Chamber of Commerce
									</a>
								</strong>
								offers a Calendar of Events
							</li>
							<li>
								<strong>
									<a
										href='https://www.tripadvisor.com/Attraction_Review-g56604-d10145562-Reviews-Fletchers_Books_Antiques-Salado_Texas.html'
										target='_blank'
										rel='noopener noreferrer'
									>
										Fletchers Books &amp; Antiques
									</a>
								</strong>
								is worth a stop if you are in Salado.
							</li>
							<li>
								Great Kayaking &amp; fishing at
								<strong>
									<a
										href='https://www.recreation.gov/camping/campgrounds/232745'
										target='_blank'
										rel='noopener noreferrer'
									>
										Wills Creek Park
									</a>
								</strong>
								on Lake Granger
							</li>
							<li>
								If golf is more your style, try
								<strong>
									<a
										href='https://www.wilco.org/Departments/Parks-Recreation/County-Parks/Berry-Springs-Park'
										target='_blank'
										rel='noopener noreferrer'
									>
										Berry Springs Park and Preserve
									</a>
								</strong>
							</li>
							<li>
								<strong>
									<a
										href='https://verandabloom.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Veranda Bloom
									</a>
								</strong>
								offers unique Home Decor. Worth a trip to Rogers!
							</li>
							<li>
								<strong>Georgetown </strong>&amp;<strong> Temple</strong>, just
								east of I-35 exits Ronald Reagan Blvd or FM 487
							</li>
						</ul>
						<p style={{ fontSize: "10px" }}>
							Bartlett is situated in both Williamson &amp; Bell Counties, and
							nestled between commercial farms &amp; cattle ranches. Feel the
							stress fall away as you drive off the interstate and into this
							historic town!
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
