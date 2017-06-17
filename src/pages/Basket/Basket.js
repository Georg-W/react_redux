import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

import store from '../../store';

class Basket extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      basketOtten: []
    };
    this.loadBasketOtten = this.loadBasketOtten.bind(this);
  }

  componentWillMount() {
    this.loadBasketOtten();
    console.log("loaded basket otten")
  }

  loadBasketOtten() {
    for(let item in this.props.otten_basket){
      console.log(item);
      fetch('http://localhost:9000/api/otten/'+item)
        .then((response) => response.json())
        .then((data) => this.state.basketOtten = [
            ...this.state.basketOtten,
            data
          ], console.log(this.state.basketOtten)
        );
      console.log(this.state.basketOtten)
    }
  }


  render() {
    const { otten_basket } = this.props;
    if(otten_basket && this.state.basketOtten){
      console.log(otten_basket);
      return (
        <Jumbotron>
          <h1>Welcome to Uberbecue!</h1>
          <p>There are <strong>{ otten_basket.length }</strong> Otten in our basket.</p>
          <TableOfOtten otten={ this.state.basketOtten } />
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
  otten_basket: store.otten_basket
});

export default connect(mapStateToProps)(Basket);