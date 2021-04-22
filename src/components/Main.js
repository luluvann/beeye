import React from "react";

import "./Main.css";

import NewSidebar from "./newSidebar/NewSidebar";
import Journals from "./journals/Journals";

function Main() {
  return (
    <div className="main">
      <NewSidebar />
      <Journals />
    </div>
  );
}

export default Main;
