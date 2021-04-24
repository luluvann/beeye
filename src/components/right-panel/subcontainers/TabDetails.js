import {React, useState} from "react";

import "../RightPanel.css";

import TeamDetails from "./TeamDetails";

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
      <p><FontAwesomeIcon icon={faFileAlt}/> Description</p>
      <p><FontAwesomeIcon icon={faCircle}/> Statut</p>
      <p onClick={handleClick}><FontAwesomeIcon icon={faUsers}/> Équipe <span>Gabrielle Chevalier</span></p>
      {isClicked ? <TeamDetails /> :""}
      <p><FontAwesomeIcon icon={faMoneyCheck}/> Honoraires</p>
      <p><FontAwesomeIcon icon={faClock}/> Durée</p>
      <p><FontAwesomeIcon icon={faCalendarAlt}/> Date butoir</p>
      <p><FontAwesomeIcon icon={faTasks}/> Checklist</p>
    </div>
  );
}

export default TabDetails;