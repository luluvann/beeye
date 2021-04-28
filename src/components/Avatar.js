import React from "react";

import "./Avatar.css"

function Avatar(props){

    return(
        <img className={`avatar ${props.className}`} src={props.src} alt="avatar"></img>
    )
}

export default Avatar;