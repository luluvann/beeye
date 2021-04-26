import React from "react";

import "./TeamTable.css";

import Avatar from "../../../Avatar";

import navAvatar from "../../../../assets/navAvatar.jpg";
import avatarEmployee1 from "../../../../assets/avatarEmployee1.jpg";
import avatarEmployee2 from "../../../../assets/avatarEmployee2.jpg";
import avatarEmployee3 from "../../../../assets/avatarEmployee3.jpg";
import avatarEmployee4 from "../../../../assets/avatarEmployee4.jpg";

import Planner from "./planner/Planner"

function TeamTable() {
  const TeamMembers = [
    {
      name: "Gabrielle Chevalier",
      poste: "Assistant Comptable",
      img: navAvatar,
    },
    {
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
      name: "Mathieu Ancel",
      poste: "Assistant Comptable",
      img: avatarEmployee2,
    },
    {
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
      <Planner />
      </>
    );
  });

  return (
    <table>
      <tr>
        <th>Nom</th>
      </tr>
      {TeamMemberRows}
    </table>
  );
}

export default TeamTable;
