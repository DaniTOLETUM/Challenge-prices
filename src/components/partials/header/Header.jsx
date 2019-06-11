import React from "react";
import NavPages from "./NavPages";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/header.css";

export default function Header({ UserData }) {
  // console.log(UserData);
  return (
    <div className="header">
      <div className="left_menu">
        <Link className="link" to="/">
          <img className="logo" src="./img/freshmile.png" alt="logo company" />
        </Link>
        <NavPages />
      </div>
      <div className="rigth_menu">
        <div className="icons">
          <FontAwesomeIcon icon={faShoppingCart} className="cart" />
          <Link className="link" to="/profile">
            <img className="avatar" src="./img/avatar.png" alt="user avatar" />
          </Link>
        </div>
        <Link className="link" to="/profile">
          <p className="user_email">{UserData.email}</p>
        </Link>
      </div>
    </div>
  );
}
