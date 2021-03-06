import React from "react";

import "../../RightPanel.css"
import TeamTable from "./TeamTable"

function TeamDetails(){
    return(
        <div className="teamDetailsContainer">
            <ul>
                <li className="selected">Profil</li>
                <li>Ressource</li>
                <li>Champ</li>
                <li>Référence</li>
            </ul>
            <div className="filters">
                <div className="filter">Poste<span>Assistant Comptable</span></div>
                <div className="filter">Site<span>Paris</span></div>
            </div>
            <button className="addFilter">+ Ajouter un filtre</button>
            <TeamTable />
        </div>
    )
}

export default TeamDetails;