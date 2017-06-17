import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import { connect } from 'react-redux';

import store from '../../store';

class Basket extends Component {

  constructor(props) {
    super(props);
    this.loadOtten = this.loadOtten.bind(this);
  }

  componentWillMount() {
    this.loadOtten();
  }

  loadOtten() {
    fetch('http://localhost:9000/api/otten/')
      .then((response) => response.json())
      .then((data) => store.dispatch({
        type: 'OTTEN_LOADED',
        data: data
      }));
  }

  render() {
    console.log(this.props);

    const { otten } = this.props;
    if(otten){
      return (
        <Jumbotron>
          <h1>Welcome to Uberbecue!</h1>
          <p>There are <strong>{ otten.length }</strong> Otten in our database.</p>
          <p><Link to="/otten" className="btn btn-primary">To the otten!</Link></p>
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

export default connect(mapStateToProps)(Basket);