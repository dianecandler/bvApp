import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form
				onSubmit={this.submitForm}
				action='https://formspree.io/f/mnqojjqy'
				method='POST'
			>
				<Form>
					<Row>
						<Col xs={6}>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label style={{ color: "var(--info)" }}>
									First Name
								</Form.Label>
								<Form.Control placeholder='First Name' />
							</Form.Group>
						</Col>
						<Col xs={6}>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label style={{ color: "var(--info)" }}>
									Last Name
								</Form.Label>
								<Form.Control placeholder='Last Name' />
							</Form.Group>
						</Col>
						<Col xs={6}>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label style={{ color: "var(--info)" }}>Email</Form.Label>
								<Form.Control placeholder='company@mail.com' />
							</Form.Group>
						</Col>
						<Col xs={6}>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label style={{ color: "var(--info)" }}>Phone</Form.Label>
								<Form.Control placeholder='+1 234 567 8900' />
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId='exampleForm.ControlTextarea1'>
						<Form.Label style={{ color: "var(--info)" }}>
							Your interest?
						</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>
				</Form>
				{status === "SUCCESS" ? (
					<p>Thanks!</p>
				) : (
					<Row className='d-flex justify-content-center'>
						<p>
							<br />
							<Button variant='primary'>Send Request</Button>
							<br />
						</p>
					</Row>
				)}
				{status === "ERROR" && <p>Ooops! There was an error.</p>}
			</form>
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
