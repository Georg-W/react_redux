import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import store from '../../store';

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      basket_price: null
    };
    console.log("price"+ store.getState().basket_price);
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      console.log("changed state");
      this.setState({
        basket_price: store.getState().basket_price
      })
    });
  }

  render() {
      return (
        <Jumbotron>
          <p><Link to="/otten" className="btn btn-primary">Take me back!</Link></p>
          <h1>Payment Summary</h1>
          <p>{this.state.basket_price} $</p>
          <p><Button className="btn btn-primary">Complete Payment with PayPal</Button></p>
        </Jumbotron>
      );
  }
}

export default Payment;