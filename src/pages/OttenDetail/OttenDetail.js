import React, { Component } from 'react';

import DetailOfOtten from '../../components/DetailOfOtten/DetailOfOtten';

class OttenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { otten: null };
    this.loadOtten = this.loadOtten.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    this.loadOtten();
  }

  loadOtten() {
    const { match } = this.props;
    const ottenId = match.params.otteId;
    console.log(this.props.match.params.otteId);
    fetch('http://localhost:9000/api/otten/' + ottenId)
      .then((response) => response.json())
      .then((data) => this.setState({ otten:data }));
  }

  render() {
    const { otten } = this.state;
    if(otten){
      return (
        <div>
          <DetailOfOtten otten={ otten } />
        </div>
      );
    }
    else{
      return(
        <p>loading..</p>
      )
    }
  }
}

export default OttenDetail;