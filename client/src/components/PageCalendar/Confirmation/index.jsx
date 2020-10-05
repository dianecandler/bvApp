import React, { Component } from "react";
import { Container, Row, Col, Table, Modal, Button } from "react-bootstrap";
import API from "../../../utils/API";
import ModalThis from "../Modal";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			id: props.productId,
			subId: "",
			CI: {},
			status: "",
		};
	}

	componentDidMount() {
		API.getDate(this.state.id).then((res) => this.setState({ CI: res }));
		this.checkId();
	}

	checkId = () => {
		let id = this.state.id;
		let mainId = id.toString().substring(-1);
		console.log(mainId);
		this.setState({ subId: mainId });
	};

	render() {
		const { status } = this.state;
		return (
			<div>
				<Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
					<Row>
						<Col>
							<h3>Thank you for your reservation request</h3>
							<br />
							<br />
							<Container>
								<Row>
									<Col sm={12} md={7}>
										<form
											onSubmit={this.submitForm}
											action='https://formspree.io/f/mknpoweb'
											method='POST'
										>
											<Table striped bordered hover variant='primary'>
												<tbody>
													<tr>
														<td>Venue</td>
														<td>
															{this.subId === 1
																? "Pesky Rabbit"
																: this.subId === 2
																? "Mockingbird Market"
																: "All Inclusive"}
														</td>
													</tr>
													<tr>
														<td>Date</td>
														<td>{this.state.CI.date}</td>
													</tr>
													<tr>
														<td>Venue</td>
														<td>
															{this.subId === 1
																? "$600/hour"
																: this.subId === 2
																? "$400/hour"
																: "1100/hour"}
														</td>
													</tr>
													<tr>
														<td>Name</td>
														<td>
															{this.state.CI.firstName} {this.state.CI.lastName}
														</td>
													</tr>
													<tr>
														<td>Email</td>
														<td>{this.state.CI.email}</td>
													</tr>
													<tr>
														<td>Phone</td>
														<td>{this.state.CI.phone}</td>
													</tr>
													<tr>
														<td>Event Type</td>
														<td></td>
													</tr>
													<tr>
														<td>Number of Guests</td>
														<td></td>
													</tr>
													<tr>
														<td>Alcohol Served</td>
														<td></td>
													</tr>
													<tr>
														<td>Event Notes</td>
														<td></td>
													</tr>
												</tbody>
											</Table>
											<Button
												variant='primary'
												onClick={() => this.setState({ modalShow: true })}
											>
												Book Now
											</Button>

											<ModalThis
												show={this.state.modalShow}
												onHome={(event) => {
													event.preventDefault();
													this.setState({ modalShow: false });
													window.location.replace("/");
												}}
											/>
										</form>
									</Col>
									<Col>
										{/* <img
                                    className="d-block w-35"
                                    src={Image}
                                    alt="Pesky Rabbit"
                                /> */}
										<p>
											Once you Submit, email confirming your
											reservation request will be sent. Try your spam or junk folder if you
											do not see your confirmation email from
											bartlettvenue@gmail.com
										</p>
										<p>
											Your 50% deposit is required to hold your reservation. 
											We will contact you for your deposit.
										</p>
										<hr />
										<h2>Contact Us</h2>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{map}</span></div> */}
										<span className='text-small'>Location:</span>
										<h5> 107 East Clark Street, Bartlett, TX 76511</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{building}</span></div> */}
										<span className='text-small'>Mailing Address:</span>
										<h5> P.O.Box 9, Bartlett, TX 76511</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{email}</span></div> */}
										<span className='text-small'>Email:</span>
										<h5> bartlettvenue@gmail.com</h5>
										<br />
										{/* <div className="float-left"><span className="circle-icon">{phone}</span></div> */}
										<span className='text-small'>Phone:</span>
										<h5> +1 662 546 4511 (Mocking 511)</h5>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
