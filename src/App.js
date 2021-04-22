import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/nav/Navbar"
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
