import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
