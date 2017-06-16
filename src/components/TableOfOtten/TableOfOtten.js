import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

class TableOfOtten extends Component {

  static defaultProps = {
    otten: []
  };

  render() {
    const { otten } = this.props;

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>race</th>
        </tr>
        </thead>
        <tbody>
        { otten.map((otten) => (
          <tr key={ otten.id }>
            <td>{ otten.id }</td>
            <td>{ otten.name }</td>
            <td>{ otten.race }</td>
            <td><Link to={ `/otten/${otten.id}` } className="btn btn-info">Show</Link></td>
          </tr>
        )) }
        </tbody>
      </Table>
    );
  }
}

export default TableOfOtten;