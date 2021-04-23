import React from "react";

import "./TeamTable.css"

function TeamTable(){
    const TeamMembers = [
        {name:"Gabrielle Chevalier", poste: "Assistant Comptable"},
        {name:"Marc Chapuis", poste: "Assistant Comptable"},
        {name:"Giselle Bissonnette", poste: "Assistant Comptable"},
        {name:"Mathieu Ancel", poste: "Assistant Comptable"},
        {name:"Marie-Noëlle Auvray", poste: "Assistant Comptable"},
        {name:"Nicole Gounelle", poste: "Assistant Comptable"},
        {name:"Natacha Corriveau", poste: "Assistant Comptable"}
    ]

    const TeamMemberRows = TeamMembers.map((teamMember,index) => {
        return (
        <tr key={index}>
            <td>
                {teamMember.name}
            </td>
            <td>
                {teamMember.poste}
            </td>
        </tr>
        )
    })

    return(
        <table>
            <tr>
                <th>
                    Nom
                </th>
            </tr>
           {TeamMemberRows}
        </table>
    )
}

export default TeamTable;