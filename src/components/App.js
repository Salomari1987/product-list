import React from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProductListContainer from "../containers/ProductListContainer";
import ProductDetailedContainer from "../containers/ProductDetailedContainer";
import {Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import history from '../browserHistory';

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div className="App">
        <header className="App-header">
          <Link to='/'><img alt="PL" className="App-logo App-logo-spin" src={logo}/></Link> Product list
        </header>
        <main className="content">
          <Switch>
            <Route path="/edit/:product_id" exact component={ProductDetailedContainer}/>
            <Route path="/" exact component={ProductListContainer}/>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
