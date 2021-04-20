import React from "react";
import "./Navbar.css";
import NavItems from "./NavItems";

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
      <li className="icons">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faQuestionCircle} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faPlusSquare} />
      </li>
    );
  };
  return (
    <nav className="navbar">
      <ul>
        {items}
        <Icons />
      </ul>
    </nav>
  );
}

export default Navbar;
