import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import ProductListContainer from "../containers/ProductListContainer";
import ProductDetailedContainer from "../containers/ProductDetailedContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img alt="PL" className="App-logo App-logo-spin" src={logo} /> Product list
      </header>
      <main className="content">
        <Switch>
          <Route path="/edit/:product_id" component={ProductDetailedContainer}/>
          <Route path="/" component={ProductListContainer}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
