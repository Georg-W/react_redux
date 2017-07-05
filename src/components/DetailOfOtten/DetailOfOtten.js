import React, {Component} from 'react';

import {Table} from 'react-bootstrap';


class DetailOfOtten extends Component {

  render() {
    const {otten} = this.props;

    return (
      <div>
        <br/><br/>
        <Table striped bordered hover md={6}>
          <thead>
          <tr>
            <th>Name</th>
            <th>Rasse</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{otten.name}</td>
            <td>{otten.race}</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DetailOfOtten;