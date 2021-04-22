import React from "react";

import "../RightPanel.css"

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
                <div className="filter">Poste</div>
                <div className="filter">Site</div>
            </div>
            <div className="Addfilter">+ Ajouter un filtre</div>
        </div>
    )
}

export default TeamDetails;