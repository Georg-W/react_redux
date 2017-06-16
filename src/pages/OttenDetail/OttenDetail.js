import React, { Component } from 'react';

import DetailOfOtten from '../../components/DetailOfOtten/DetailOfOtten';

class OttenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { grill: null };
    this.loadOtten = this.loadOtten.bind(this);
  }

  componentWillMount() {
    this.loadOtten();
  }

  loadOtten() {
    const { match } = this.props;
    const ottenId = match.params.ottenId;
    fetch('http://localhost:9000/api/otten/' + ottenId)
      .then((response) => response.json())
      .then((data) => this.setState({ otten:data }));
  }

  render() {
    const { otten } = this.state;

    return (
      <div>
        <h1>Otten</h1>
        { otten && <DetailOfOtten otten={ otten } /> }
      </div>
    );
  }
}

export default OttenDetail;