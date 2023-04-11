import React from "react";
import "./App.css";
import Home from "./components/Home";
import logo from "./assets/cover.png";
import RouteSwitch from "./RouteSwitch";

function App() {
  const [activeNav, setActiveNav] = React.useState(window.location.pathname);

  console.log(activeNav);
  return (
    <div id="test">
      <nav id="home-nav-cont">
        <img id="nav-logo" src={logo} alt="black sky logo" />
        <div id="nav-links-cont">
          <a
            className={activeNav === "/" ? "nav-link activeNav" : "nav-link"}
            href="/"
          >
            Home
          </a>
          <a
            className={
              activeNav === "/shop" ? "nav-link activeNav" : "nav-link"
            }
            href="/shop"
          >
            Shop
          </a>
        </div>
      </nav>
      <RouteSwitch />
      <footer>
        <span>
          Made by{" "}
          <a
            id="footer-link"
            href="https://github.com/Hekimianz"
            target="_blank"
            rel="noreferrer"
          >
            Aram Hekimian
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
