import React from "react";
import NavPages from "./NavPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left_menu">
        <img className="logo" src="./img/freshmile.png" alt="logo company" />
        <NavPages />
      </div>
      <div className="rigth_menu">
        <div className="icons">
          <FontAwesomeIcon icon={faShoppingCart} size="3x" color="#34495e" />
          <img className="avatar" src="./img/avatar.png" alt="user avatar" />
        </div>
        <p className="user_email">email@email.com</p>
      </div>
    </div>
  );
}
