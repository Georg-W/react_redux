import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableOfOtten from '../../components/TableOfOtten/TableOfOtten';

class OttenList extends Component {

  render() {
    const { otten } = this.props;

    return (
      <div>
        <h1>Available Otten</h1>
        <TableOfOtten otten={ otten } />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  otten: store.otten
});

export default connect(mapStateToProps)(OttenList);