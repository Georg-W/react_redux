import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

import store from '../../store';

class Basket extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    console.log(store.getState().otten_basket);
    console.log(store.getState().basket_price);
    this.state = {
      basketOtten: store.getState().otten_basket,
      price: 0
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      console.log("changed basket state");
      this.state.basketOtten = store.getState().otten_basket;
      this.setState({
        basketOtten: store.getState().otten_basket
      });
    });
  }

    componentWillUnmount() {
      this.unsubscribe();
    }

  render() {
    if (this.state.basketOtten) {
      console.log(this.state.basketOtten);
      return (
        <Jumbotron>
          <Button
            className="button icon-left"
            onClick={() => this.props.history.goBack()}>
            Back
          </Button>
          <h1>Welcome to UberOtten!</h1>
          <p>There are <strong>{ this.state.basketOtten.length }</strong> Otten in our basket.</p>
          <TableOfOtten otten={ this.state.basketOtten } fromBasket={true}/>
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


export default Basket;