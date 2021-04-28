import {React, useState} from "react";

import "../RightPanel.css";

import TeamDetails from "./team-details/TeamDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileAlt,
  faCircle,
  faUsers,
  faMoneyCheck,
  faClock,
  faCalendarAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

function TabDetails() {
  const [isClicked,setClicked] = useState(true)

  function handleClick(){
      isClicked ? setClicked(false) : setClicked(true)
      console.log(isClicked)
  }

  return (
    <div className="tabDetails">
      <p><FontAwesomeIcon icon={faFileAlt} className="icons"/> Description</p>
      <p><FontAwesomeIcon icon={faCircle} className="icons"/> Statut</p>
      <p onClick={handleClick}><FontAwesomeIcon icon={faUsers} className="icons"/> Équipe <span>Gabrielle Chevalier</span></p>
      {isClicked ? <TeamDetails /> :""}
      <p><FontAwesomeIcon icon={faMoneyCheck} className="icons"/> Honoraires</p>
      <p><FontAwesomeIcon icon={faClock} className="icons"/> Durée</p>
      <p><FontAwesomeIcon icon={faCalendarAlt} className="icons"/> Date butoir</p>
      <p><FontAwesomeIcon icon={faTasks} className="icons"/> Checklist</p>
    </div>
  );
}

export default TabDetails;