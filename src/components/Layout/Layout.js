import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonToolbar, Col, PageHeader} from 'react-bootstrap';
import store from '../../store';

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
    return (
      <div className="App">
        <div className="App-header" style={{height: 200}}>
          <div>
            <Link to="/">
              <Col>
                <PageHeader>OttenUber</PageHeader>
              </Col>
            </Link>
            <Col>
              <ButtonToolbar>
                <Link to="/basket">
                  <Button className="info">{this.state.otten_basket ? this.state.otten_basket.length : 0} Otten ausgewählt</Button>
                </Link>
                <Link to="/addOtte">
                  <Button className="info">Neuen Otten anbieten</Button>
                </Link>
              </ButtonToolbar>
            </Col>
          </div>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Layout;