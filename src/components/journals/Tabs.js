import React from "react";
import Tab from "react-bootstrap/Tab";
import TabItems from "./TabItems"

function Tabs(){
    const items = TabItems.map((item, index)=>{
        <Tab eventKey={item.eventKey} title={item.title}>
            <div>Somethin</div>
        </Tab>

    })

    return(
        <div>{items}</div>
        
    )
}

export default Tabs;