import React from "react";

import "./TeamTable.css";

import Avatar from "../../../Avatar";

import avatarEmployee1 from "../../../../assets/avatarEmployee1.jpg";
import avatarEmployee2 from "../../../../assets/avatarEmployee2.jpg";
import avatarEmployee3 from "../../../../assets/avatarEmployee3.jpg";
import avatarEmployee4 from "../../../../assets/avatarEmployee4.jpg";

import Planner from "./planner/Planner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function TeamTable() {
  const TeamMembers = [
    {
      id: "02",
      name: "Marc Chapuis",
      poste: "Assistant Comptable",
      img: avatarEmployee1,
    },
    {
      name: "Giselle Bissonnette",
      poste: "Assistant Comptable",
      img: avatarEmployee3,
    },
    {
      id: "03",
      name: "Mathieu Ancel",
      poste: "Assistant Comptable",
      img: avatarEmployee2,
    },
    {
      id: "04",
      name: "Marie-Noëlle Auvray",
      poste: "Assistant Comptable",
      img: avatarEmployee4,
    },
  ];

  const TeamMemberRows = TeamMembers.map((teamMember, index) => {
    return (
      <>
        <tr key={index} className="teamMemberContainer">
          <td className="avatarEmployee">
            <Avatar src={teamMember.img} />
          </td>
          <div className="NamePosition">
            <td>{teamMember.name}</td>
            <td className="position">{teamMember.poste}</td>
          </div>
        </tr>
      </>
    );
  });

  return (
    <table>
      <tr>
        <th>Nom</th>
      </tr>
      <tr className="teamMemberContainer">
        <td className="checkCircle">
          <FontAwesomeIcon icon={faCheckCircle} style={{borderRadius:"30px",backgroundColor:"orange",color:"#fff3e2", fontSize:"55px"}} />
        </td>
        <div className="NamePosition">
          <td>Gabrielle Chevalier</td>
          <td className="position">Assistant comptable</td>
        </div>
      </tr>
      <Planner />
      {TeamMemberRows}
    </table>
  );
}

export default TeamTable;
