import React, {Component} from 'react';
import {Button, Alert} from 'react-bootstrap';

class PaymentSuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCount: 30,
      timerFinished: false
    }
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.setState({
        timerFinished: true
      })
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    {
      if (this.state.timerFinished === false) {
        return (
          <div>
            <Button
              className="button icon-left"
              onClick={() => this.props.history.goBack()}>
              Back
            </Button>
            <h1>Your Payment was successfull!</h1>
            <h1>Thank you for choosing OttenUber</h1>
            <h2>Your Otten will arrive in: </h2>
            <h1>
              {this.state.currentCount}
            </h1>
          </div>
        )
      }
      else {
        return (
          <Alert bsStyle="success">
            <strong>Viel Spass mit dem Otten!</strong>
          </Alert>
        )
      }
    }
  }
}

export default PaymentSuccess;