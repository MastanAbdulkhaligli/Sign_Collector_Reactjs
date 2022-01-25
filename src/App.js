import "./App.css";
import Navbar from "./Navbar";
import Game from "./Game";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game />
    </div>
  );
}

export default App;
