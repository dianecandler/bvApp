import React, { Component } from 'react';
import Calendar from './Calendar';
import Products from './Products';
import Register from './Register';
import Confirmation from './Confirmation';

export default class index extends Component {
    state = {
        date: "",
        productId: "",
        showCalendar: true,
        showProducts: false,
        showRegister: false,
        showConfirmation: false
    }

    // handle input change function
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const value = document.getElementById('search').value;
        console.log(value);

        this.searchDate(this.state.search);

    };

    searchDate = newDate => {
        console.log(newDate);
        let a = new Date(newDate)
        let d = new Date();
        this.setState({date:newDate});
        console.log(this.state.date);
        if(a < d ) {
            this.setState({showProducts:false});
            alert('Please select upcoming date to book us!');
        } else if (newDate === undefined) {
            this.setState({showProducts:false});
            alert('Please select a date to book us!');
        } 
        else {
            this.setState({showProducts: true, showCalendar: false});
            // API.saveDate({_id:a, date:a}).then(saveDate => this.setState({date: saveDate})).catch(err => console.error(err));
        }
    };



    render() {
        return (
            <div>
                { this.state.showCalendar ? <Calendar search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/> : null}
                { this.state.showProducts ? <Products /> : null}
                { this.state.showRegister ? <Register /> : null}
                { this.state.showConfirmation ? <Confirmation /> : null}                
            </div>
        )
    }
}
