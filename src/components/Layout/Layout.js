import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

import logo from '../../logo.svg';

class Layout extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>OttenUber</h2>
          <ButtonToolbar>
            <Link to="/basket">
              <Button className="info">Basket</Button>
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

export default Layout;