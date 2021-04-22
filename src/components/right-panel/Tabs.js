import React from "react";
import Tab from "react-bootstrap/Tab";
import TabItems from "./TabItems"

function Tabss(){
    const items = TabItems.map((item, index)=>{
        <Tab eventKey={item.eventKey} title={item.title}>
            <div>Somethin</div>
        </Tab>

    })

    return(
        <div>
       {items}
       </div>
    )
}

export default Tabss;