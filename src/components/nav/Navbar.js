import React from "react";
import "./Navbar.css";
import "../Avatar.css"

import NavItems from "./NavItems";
import Avatar from "../Avatar"

import navAvatar from "../../assets/navAvatar.jpg"
import logo from "../../assets/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faQuestionCircle, faCog, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  const items = NavItems.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  });

  const Icons = () => {
    return (
      <div className="icons">
        <div className="icon"><FontAwesomeIcon icon={faSearch} /></div>
        <div className="icon"><FontAwesomeIcon icon={faBell} /></div>
        <div className="icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
        <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
        <div className="icon larger"><FontAwesomeIcon icon={faPlusSquare} color="orange"/></div>
      </div>
    );
  };
  return (
    <nav>
      <img src={logo} className="navLogo"></img>
      <ul>
        {items}
      </ul>
      <div className="navRight">
        <Icons />
        <Avatar src={navAvatar} className="navAvatar"/>
      </div>
    </nav>
  );
}

export default Navbar;
