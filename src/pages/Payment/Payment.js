import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import store from '../../store';

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      basket_price: store.getState().basket_price
    };
    console.log("price"+ store.getState().basket_price);
  }

  render() {
      return (
        <Jumbotron>
          <p><Link to="/otten" className="btn btn-primary">Take me back!</Link></p>
          <h1>Payment Summary</h1>
          <p>{this.state.basket_price} $</p>
          <p><Link to="/success" className="btn btn-primary">Complete Payment with PayPal</Link></p>
        </Jumbotron>
      );
  }
}

export default Payment;