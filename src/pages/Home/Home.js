import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import { connect } from 'react-redux';

import store from '../../store';

class Home extends Component {

  constructor(props) {
    super(props);
    this.loadOtten = this.loadOtten.bind(this);
  }

  componentWillMount() {
    this.loadOtten();
    console.log("loaded otten")
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
    const { otten } = this.props;
    if(otten){
      return (
        <Jumbotron>
          <h1>Willkommen bei OttenUber!</h1>
          <p>Momentan befinden sich <strong>{ otten.length }</strong> Otten im Angebot.</p>
          <p><Link to="/otten" className="btn btn-primary">Auf zu den Otten!</Link></p>
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

export default connect(mapStateToProps)(Home);