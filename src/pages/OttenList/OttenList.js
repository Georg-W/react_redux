import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

import store from '../../store';


class OttenList extends Component {

  constructor(props){
    super(props);

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      console.log("changed state");
      this.props.otten = store.getState().otten;

        this.setState({})
    });
  }

  render() {
    const { otten } = this.props;

    return (
      <div>
        <h1>Available Otten</h1>
        <TableOfOtten otten={ otten } fromBasket = {false} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  otten: store.otten
});

export default connect(mapStateToProps)(OttenList);