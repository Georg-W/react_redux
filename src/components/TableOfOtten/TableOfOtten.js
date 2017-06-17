import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

import store from '../../store';

class TableOfOtten extends Component {

  constructor(props) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
  }

  static defaultProps = {
    otten: [],
    otten_basket: []
  };

  addToBasket(id){
    console.log("table triggered");
    store.dispatch({
      type: 'OTTEN_IN_BASKET',
      data: id
    });
  }

  render() {
    const { otten } = this.props;

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
            {this.props.fromBasket===false?<td><Button onClick={() => this.addToBasket(otten.id)} className="btn btn-info">Add to Basket</Button></td>:null}
          </tr>
        )) }
        </tbody>
      </Table>
    );
  }
}

export default TableOfOtten;