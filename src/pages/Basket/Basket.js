import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import {connect} from 'react-redux';
import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

import store from '../../store';

class Basket extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.loadBasketOtten = this.loadBasketOtten.bind(this);
    this.state = {
      basketOtten: [],
      price: []
    };
  }

  componentWillMount() {
    this.loadBasketOtten();
  }

  loadBasketOtten() {
    for (let item in this.props.otten_basket) {
      fetch('http://localhost:9000/api/otten/' + this.props.otten_basket[item])
        .then((response) => response.json())
        .then((data) => {this.setState({
            basketOtten: [
              ...this.state.basketOtten,
              data
            ],
            price: this.state.price += data.price
          }),store.dispatch({
            type: 'BASKET_PRICE',
            data: data.price
          }) }
        );
    }
  }

  render() {
    const {otten_basket} = this.props;
    if (otten_basket && this.state.basketOtten) {
      return (
        <Jumbotron>
          <h1>Welcome to Uberbecue!</h1>
          <p>There are <strong>{ otten_basket.length }</strong> Otten in our basket.</p>
          <TableOfOtten otten={ this.state.basketOtten } fromBasket = {true}/>
          <Link to="/payment" className="btn btn-primary">Complete Payment</Link>
        </Jumbotron>
      );
    }
    else {
      return (
        <p>loading...</p>
      )
    }

  }
}

const mapStateToProps = (store) => ({
  otten_basket: store.otten_basket
});

export default connect(mapStateToProps)(Basket);