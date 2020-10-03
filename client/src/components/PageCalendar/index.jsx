import React, { Component } from "react";
import Calendar from "./Calendar";
import Products from "./Products";
import Register from "./Register";
import Confirmation from "./Confirmation";

export default class index extends Component {
	state = {
		date: "",
		productId: "",
		showCalendar: true,
		showProducts: false,
		showRegister: false,
		showConfirmation: false,
	};

	// Calendar functions
	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		const value = document.getElementById("search").value;
		console.log(value);

		this.searchDate(this.state.search);
	};

	searchDate = (newDate) => {
		console.log(newDate);
		let a = new Date(newDate);
		let d = new Date();
		this.setState({ date: newDate });
		console.log(this.state.date);
		if (a < d) {
			this.setState({ showProducts: false });
			alert("Please select upcoming date to book us!");
		} else if (newDate === undefined) {
			this.setState({ showProducts: false });
			alert("Please select a date to book us!");
		} else {
			this.setState({ showProducts: true, showCalendar: false });
			// API.saveDate({_id:a, date:a}).then(saveDate => this.setState({date: saveDate})).catch(err => console.error(err));
		}
	};

	// Products functions
	backToCalendar = (event) => {
		event.preventDefault();
		window.location.reload(false);
	};

	buttonPR = (event) => {
		console.log(event.target.value);
		this.setState({ showProducts: false, showRegister: true });
		this.setState({ productId: event.target.value });
	};

	buttonREG = (event) => {
		this.setState({ showConfirmation: true, showRegister: false });
	};

	render() {
		return (
			<div>
				{this.state.showCalendar ? (
					<Calendar
						search={this.state.search}
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
					/>
				) : null}
				{this.state.showProducts ? (
					<Products
						date={this.state.date}
						backToCalendar={this.backToCalendar}
						buttonPR={this.buttonPR}
						productId={this.state.productId}
					/>
				) : null}
				{this.state.showRegister ? (
					<Register
						backToCalendar={this.backToCalendar}
						date={this.state.date}
						productId={this.state.productId}
						buttonREG={this.buttonREG}
					/>
				) : null}
				{this.state.showConfirmation ? (
					<Confirmation productId={this.state.productId} />
				) : null}
			</div>
		);
	}
}
