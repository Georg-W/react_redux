import React, { Component } from 'react';

class DetailOfOtten extends Component {

  render() {
    const { otten } = this.props;

    return (
      <div>
        <h2>Name { otten.name }</h2>
        <p>Location { otten.location.lat }, { otten.location.lng }</p>
      </div>
    );
  }
}

export default DetailOfOtten;