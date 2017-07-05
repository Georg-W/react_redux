import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class PaymentSuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {currentCount: 30}
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      alert("Enjoy your Otten!")
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      console.log(this.props),
      <div>
        <Button
          className="button icon-left"
          onClick={() => this.props.history.goBack()}>
          Back
        </Button>
        <h1>Your Payment was successfull!</h1>
        <h1>Thank you for choosing UberOtten</h1>
        <h2>Your Otten will arrive in: </h2>
        <h1>
            {this.state.currentCount}
          </h1>
      </div>
    );
  }
}

export default PaymentSuccess;