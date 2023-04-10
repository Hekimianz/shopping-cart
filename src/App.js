import React from "react";
import "./App.css";
import Home from "./components/Home";
import logo from "./assets/cover.png";

function App() {
  return (
    <div>
      <nav id="home-nav-cont">
        <img id="nav-logo" src={logo} alt="black sky logo" />
        <div id="nav-links-cont">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Shop
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </div>
      </nav>
      <Home />
      <footer>
        <span>Made by Aram Hekimian</span>
      </footer>
    </div>
  );
}

export default App;
