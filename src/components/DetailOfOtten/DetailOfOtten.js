import React, { Component } from 'react';

class DetailOfOtten extends Component {

  render() {
    const { otten } = this.props;

    return (
      console.log(otten),
      <div>
        <h2>Name { otten.name }</h2>
        <p>race { otten.race }</p>
      </div>
    );
  }
}

export default DetailOfOtten;