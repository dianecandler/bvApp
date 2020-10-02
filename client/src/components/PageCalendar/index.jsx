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
