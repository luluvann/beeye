import React from "react";

import "../RightPanel.css";

import TeamDetails from "./TeamDetails"

function TabDetails() {
  return (
    <div className="tabDetails">
      <p>Description</p>
      <p>Statut</p>
      <p>Équipe <span>Gabrielle Chevalier</span></p>
      <TeamDetails />
      <p>Honoraires</p>
      <p>Durée</p>
      <p>Date butoir</p>
      <p>Checklist</p>
      <p>Champs</p>
    </div>
  );
}

export default TabDetails;