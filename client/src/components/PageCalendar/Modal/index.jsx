import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function index(props) {
	return (
		
			<Modal
				{...props}
				size='md'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Thank you for your reservation request!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Bartlett Venue will contact you soon.</h4>
					<p>
						Email confirmation was sent. May need to check your spam or junk folder
						if you don't see it.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHome}>Return to Bartlett Venue</Button>
				</Modal.Footer>
			</Modal>
	
	)
}
