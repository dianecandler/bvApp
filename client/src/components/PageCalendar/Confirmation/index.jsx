import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import API from "../../../utils/API";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.productId,
			CI: {},
		};
	}

	componentDidMount() {
		API.getDate(this.state.id).then((res) => this.setState({ CI: res }));
	}
	render() {
		return (
			<div>
				<Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
					<Row>
						<Col>
							<h3>Thank you for your reservation.</h3>
							<br />
							<br />
							<Container>
								<Row>
									<Col sm={12} md={7}>
										<Table striped bordered hover variant='primary'>
											<tbody>
												<tr>
													<td>Venue</td>
													<td></td>
												</tr>
												
											</tbody>
										</Table>
									</Col>
									<Col>
										{/* <img
                                    className="d-block w-35"
                                    src={Image}
                                    alt="Pesky Rabbit"
                                /> */}
										<p>
											Look for an email confirming your reservation request. Try
											your spam or junk folder if you do not see your
											confirmation email.
										</p>
										<p>
											To hold your reservation, we must receive your event
											deposit. We will contact you for your deposit.
										</p>
										<hr />
										<h2>Contact Us</h2>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{map}</span></div> */}
										<span className='text-small'>Location:</span>
										<h5> 107 East Clark Street, Bartlett, TX 76500</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{building}</span></div> */}
										<span className='text-small'>Mailing Address:</span>
										<h5> P.O.Box 9, Bartlett, TX 76500</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{email}</span></div> */}
										<span className='text-small'>Email:</span>
										<h5> hello@bartlettvenue.com</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{phone}</span></div> */}
										<span className='text-small'>Phone:</span>
										<h5> +1 512 964 9473</h5>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
