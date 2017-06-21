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

  deleteOtten(id){
    console.log("delete triggered");
    if(!this.props.fromBasket){
      fetch('http://localhost:9000/api/otten/'+id, {
        method: 'DELETE',
        body: id
      })
        .then(store.dispatch({
          type:'DELETE_OTTEN',
          data:id
        }));
      console.log("deleted otten "+id);
    }
    else{
      let data = String(id);
      console.log(data);
      console.log(store.getState());
      store.dispatch({
        type: 'REMOVE_OTTEN_FROM_BASKET',
        data:id
      });
      console.log("removed from basket");
      console.log(store.getState())

    }
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
            <td><Button bsStyle="danger" onClick={() => this.deleteOtten(otten.id)}>Delete</Button></td>
          </tr>
        )) }
        </tbody>
      </Table>
    );
  }
}

export default TableOfOtten;