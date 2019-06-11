import React, { Component } from "react";
import "../src/styles/App.css";
import { Switch, Route } from "react-router-dom";
import AllData from "./enonce/data.json";

//COMPONENTS
import Header from "./components/partials/header/Header";
import Footer from "./components/partials/footer/Footer";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import ChargeDetails from "./components/pages/ChargeDetails";
import Products from "./components/pages/Products";
import ProductsDetails from "./components/pages/ProductsDetails";
import Page404 from "./components/pages/Page404";


class App extends Component {
  state = {
    UserData: AllData.user,
  };


  render() {
    // console.log(this.state.UserData);
    const { UserData } = this.state;
    return (
      <div className="App" >
        <Header UserData={UserData} />
        <main className="content_main">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/charge/ref" component={ChargeDetails} />
            <Route path="/shop" component={Products} />
            <Route path="/shop/ref" component={ProductsDetails} />
            <Route path="/*" component={Page404} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
