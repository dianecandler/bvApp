import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	InputGroup
} from "react-bootstrap";
import Terms from './Terms.pdf';
import Privacy from './Privacy.pdf';
import API from '../../../utils/API';

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: props.productId,
			date: props.date,
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			eventNotes: "",
			questions: "",
			terms: false,
			privacy: false,
			validateCheck: false,
		};
		this.handleInputChangeRegister = this.handleInputChangeRegister.bind(this);
		this.handleFormSubmitRegister = this.handleFormSubmitRegister.bind(this);
	}

	handleInputChangeRegister(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleFormSubmitRegister(event) {
		event.preventDefault();
		console.log(this.state._id);
		const newReservation = {
			_id: this.state._id,
			date: this.state.date,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone,
			eventNotes: this.state.eventNotes,
			questions: this.state.questions,
			terms: this.state.terms,
			privacy: this.state.privacy,
			validateCheck: this.state.validateCheck,
		};

		console.log(newReservation);
		API.saveDate(newReservation);
	}

	render() {
		return (
			<Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
				<Row style={{ marginBottom: "2rem" }}>
					<Button onClick={this.props.backToCalendar}>Back to Calendar</Button>
				</Row>
				<Row>
					<Col>
						<h3>Please complete and submit your reseration request.</h3>
						<br />
						<br />
						<Container>
							<Row>
								<Col sm={12} md={7}>
									<Form>
										<Row>
											<Col xs={6}>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label style={{ color: "var(--info)" }}>
														First Name
													</Form.Label>
													<Form.Control
														placeholder='First Name'
														value={this.state.firstName}
														name='firstName'
														onChange={this.handleInputChangeRegister}
														type='text'
													/>
												</Form.Group>
											</Col>
											<Col xs={6}>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label style={{ color: "var(--info)" }}>
														Last Name
													</Form.Label>
													<Form.Control
														placeholder='Last Name'
														value={this.state.lastName}
														name='lastName'
														onChange={this.handleInputChangeRegister}
														type='text'
													/>
												</Form.Group>
											</Col>
											<Col xs={6}>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label style={{ color: "var(--info)" }}>
														Email
													</Form.Label>
													<Form.Control
														placeholder='company@mail.com'
														value={this.state.email}
														name='email'
														onChange={this.handleInputChangeRegister}
														type='text'
													/>
												</Form.Group>
											</Col>
											<Col xs={6}>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label style={{ color: "var(--info)" }}>
														Phone
													</Form.Label>
													<Form.Control
														placeholder='+1 234 567 8900'
														value={this.state.phone}
														name='phone'
														onChange={this.handleInputChangeRegister}
														type='text'
													/>
												</Form.Group>
											</Col>
										</Row>
										<Form.Group controlId='exampleForm.ControlTextarea1'>
											<Form.Label style={{ color: "var(--info)" }}>
												Describe your event.
												<br />
												Event title, number of guests, type of party, food plan,
												seated or cocktail, alcohol served, event hours, special
												needs, etc.
											</Form.Label>
											<Form.Control
												as='textarea'
												rows='3'
												value={this.state.eventNotes}
												name='eventNotes'
												onChange={this.handleInputChangeRegister}
											/>
										</Form.Group>
										<Form.Group controlId='exampleForm.ControlTextarea2'>
											<Form.Label style={{ color: "var(--info)" }}>
												Questions?
											</Form.Label>
											<Form.Control
												as='textarea'
												rows='3'
												value={this.state.questions}
												name='questions'
												onChange={this.handleInputChangeRegister}
											/>
										</Form.Group>
										<Row style={{ paddingLeft: "1rem" }}>
											<Col>
												<InputGroup className='inputTerms mb-3'>
													<InputGroup.Prepend className='inputgroupprependTerms'>
														<InputGroup.Checkbox
															className='inputgroupcheckboxTerms'
															aria-label='Checkbox for following text input'
															value={this.state.terms}
														/>
													</InputGroup.Prepend>
													<Form.Text className='inputgrouplinkTerms'>
														<a
															href={Terms}
															target='_blank'
															rel='noopener noreferrer'
															className='linkTerms'
														>
															Terms &amp; Conditions
														</a>
													</Form.Text>
												</InputGroup>
												<InputGroup className='inputTerms mb-3'>
													<InputGroup.Prepend className='inputgroupprependTerms'>
														<InputGroup.Checkbox
															className='inputgroupcheckboxTerms'
															aria-label='Checkbox for following text input'
															value={this.state.privacy}
														/>
													</InputGroup.Prepend>
													<Form.Text className='inputgrouplinkTerms'>
														<a
															href={Privacy}
															target='_blank'
															rel='noopener noreferrer'
															className='linkTerms'
														>
															Privacy Policy
														</a>
													</Form.Text>
												</InputGroup>
												<InputGroup className='inputTerms mb-3'>
													<InputGroup.Prepend className='inputgroupprependTerms'>
														<InputGroup.Checkbox
															className='inputgroupcheckboxTerms'
															aria-label='Checkbox for following text input'
															value={this.state.validateCheck}
														/>
													</InputGroup.Prepend>
													<Form.Text className='inputgrouplinkTerms'>
														Validated All Information
													</Form.Text>
												</InputGroup>
											</Col>
										</Row>
										<Row className='d-flex justify-content-center'>
											<p>
												<br />
												<Button
													variant='primary'
													onClick={this.handleFormSubmitRegister}
												>
													SUBMIT
												</Button>
												<br />
											</p>
										</Row>
									</Form>
								</Col>
								<Col>
									{/* <img
                                    className="d-block w-35"
                                    src={Image}
                                    alt="Pesky Rabbit"
                                /> */}
									<p>
										Look for an email confirming your reservation request. Try
										your spam or junk folder if you do not see your confirmation
										email.
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
		);
	}
}