import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';
import Payment from './pages/Payment/Payment';
import OttenList from './pages/OttenList/OttenList';
import OttenDetail from './pages/OttenDetail/OttenDetail';
import AddOtte from './pages/AddOtte/AddOtte';

import './App.css';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/otten" component={OttenList} />
            <Route exact path="/otten/:otteId" component={OttenDetail}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/addOtte" component={AddOtte} />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
