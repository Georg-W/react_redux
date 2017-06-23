import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

import store from '../../store';

class TableOfOtten extends Component {

  constructor(props) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
    this.deleteOtten = this.deleteOtten.bind(this);
  }

  static defaultProps = {
    otten: [],
    otten_basket: []
  };

  addToBasket(otte){
    console.log("table triggered");
    store.dispatch({
      type: 'OTTEN_IN_BASKET',
      data: otte
    });
    store.dispatch({
      type: 'BASKET_PRICE',
      data: otte.price
    });
    console.log(store.getState());
  }

  deleteOtten(otte){
    console.log("delete triggered");
    if(!this.props.fromBasket){
      fetch('http://localhost:9000/api/otten/'+otte.id, {
        method: 'DELETE',
        body: otte.id
      })
        .then(store.dispatch({
          type:'DELETE_OTTEN',
          data:otte.id
        }));
      console.log("deleted otten "+otte.id);
    }
    else{
      store.dispatch({
        type: 'REMOVE_OTTEN_FROM_BASKET',
        data: otte.id
      });
      store.dispatch({
        type: 'DELETE_BASKET_PRICE',
        data: otte.price
      });
      console.log("removed from basket");
    }
  }

  render() {
    const { otten } = this.props;
    console.log("table got rendered");
    console.log(otten);

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>race</th>
          <th>age</th>
          <th>price</th>
          <th>details</th>
          {this.props.fromBasket===false?<th>Add</th>:null}
        </tr>
        </thead>
        <tbody>
        { otten.map((otten) => (
          <tr key={ otten.id }>
            <td>{ otten.id }</td>
            <td>{ otten.name }</td>
            <td>{ otten.race }</td>
            <td>{ otten.age }</td>
            <td>{ otten.price }</td>
            <td><Link to={ `/otten/${otten.id}` } className="btn btn-info">Show</Link></td>
            {this.props.fromBasket===false?<td><Button onClick={() => this.addToBasket(otten)} className="btn btn-info">Add to Basket</Button></td>:null}
            <td><Button bsStyle="danger" onClick={() => this.deleteOtten(otten)}>Delete</Button></td>
          </tr>
        )) }
        </tbody>
      </Table>
    );
  }
}

export default TableOfOtten;