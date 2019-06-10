import React from "react";
import NavPages from "./NavPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left_menu">
        <img
          className="logo"
          src="../../../../public/enonce/img/freshmile.png"
          alt="logo company"
        />
        <NavPages />
      </div>
      <div className="rigth_menu">
        <div className="icons">
          <FontAwesomeIcon icon={faShoppingCart} />
          <img
            className="avatar"
            src="../../../../public/enonce/img/avatar.png"
            alt="user avatar"
          />
        </div>
        <p className="user_email">email@email.com</p>
      </div>
    </div>
  );
}
