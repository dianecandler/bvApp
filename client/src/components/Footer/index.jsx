import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Terms from "./terms.pdf";
import FAQ from "./faq.pdf";
import Diane from "./diane.jpg";
import { Navbar, Nav } from "react-bootstrap";

export default function index() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='light' variant='dark' className="fixed-bottom">
			<Navbar.Brand href='/' style={{color:'#f87060ff'}}>Bartlett Venue</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link>
						Developed by Diane Candler 2020 &copy; All Rights Reserved
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href={FAQ} target='_blank' rel='noopener noreferrer'>
						FAQ
					</Nav.Link>
					<Nav.Link
						eventKey={2}
						href={Terms}
						target='_blank'
						rel='noopener noreferrer'
					>
						Terms &amp; Conditions
					</Nav.Link>
					<Nav.Link
						eventKey={3}
						href={Terms}
						target='_blank'
						rel='noopener noreferrer'
					>
						Privacy Policy
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
