import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonToolbar} from 'react-bootstrap';
import store from '../../store';

import logo from '../../logo.svg';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      otten_basket: null
    };
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      console.log("changed state");
      this.setState({
        otten_basket: store.getState().otten_basket
      })
    });
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <h2>OttenUber</h2>
          <ButtonToolbar>
            <Link to="/basket">
              <p>{this.state.otten_basket ? this.state.otten_basket.length : 0}</p>
              <Button className="info">Basket</Button>
            </Link>
            <Link to="/addOtte">
              <Button className="info">Add Otte</Button>
            </Link>
          </ButtonToolbar>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  console.log("triggered layout");
  console.log(store.otten_basket);

  return {
    otten_basket: store.otten_basket
  };
};

export default Layout;