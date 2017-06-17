import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import store from '../../store';

class Payment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { otten } = this.props;
    if(otten){
      return (
        <Jumbotron>
          <p><Link to="/otten" className="btn btn-primary">Take me back!</Link></p>
          <h1>Payment Summary</h1>
          <p>13,42$</p>
          <p><Button className="btn btn-primary">Complete Payment with PayPal</Button></p>

        </Jumbotron>
      );
    }
    else{
      return(
        <p>loading...</p>
      )
    }

  }
}

const mapStateToProps = (store) => ({
  otten: store.otten
});

export default connect(mapStateToProps)(Payment);