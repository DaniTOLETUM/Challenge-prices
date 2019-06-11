import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/productslist.css";
import AllData from "../../enonce/data.json";

export default class Profile extends Component {
  state = {
    ProductsData: AllData.merchandises
  };

  render() {
    console.log(this.state.ProductsData);
    return (
      <React.Fragment>
        <h1>Welcome to the Products Page</h1>
        <ul className="list products">
          {this.state.ProductsData.map((product, index) => (
            <li className="product" key={index}>
              <Link to={`/shop/${product.ref}`}>
                <img
                  className="product_image"
                  src={`./img/merchandises/${product.image}`}
                  alt={`${product.name}`}
                />
                <p>
                  name: {product.name} <b>({product.ref})</b>
                </p>
                <p>price: {product.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
