import React from 'react';
// import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/partials/header/Header';

//COMPONENTS
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import ChargeDetails from "./components/pages/ChargeDetails";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductsDetails";
import Page404 from "./components/pages/Page404";


function App() {
  return (
    <div className="App">
      <Header />
      <main id="content_main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/charge/ref" component={ChargeDetails} />
          <Route path="/shop" component={Products} />
          <Route path="/shop/ref" component={ProductDetails} />
          <Route path="/*" component={Page404} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
