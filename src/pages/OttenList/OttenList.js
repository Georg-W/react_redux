import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

import store from '../../store';


class OttenList extends Component {

  constructor(props){
    super(props);
    this.state = {
      otten: store.getState().otten
    };
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      console.log("changed state");
      this.state.otten = store.getState().otten;
        this.setState({})
    });
  }

  render() {
    return (
      console.log(this.state.otten),
      <div>
        <h1>Available Otten</h1>
        <TableOfOtten otten={ this.state.otten } fromBasket = {false} />
      </div>
    );
  }
}

export default OttenList;