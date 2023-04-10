import React from "react";
import "./Home.css";
import mountain from "../assets/mountain.jpg";
import models1 from "../assets/models1.jpg";
import models2 from "../assets/models2.jpg";

export default function Home() {
  return (
    <div id="home-cont">
      <section id="home-main-cont">
        <div id="main-top-cont">
          <div id="main-top-left">
            <h1>
              Explore The <span className="heading-highlight">Unknown</span>
            </h1>
            <button>SHOP</button>
          </div>
          <img id="mountain" src={mountain} alt="mountain with white halo" />
        </div>
        <div id="main-mid-cont">
          <img id="models1" src={models1} alt="two models" />
          <p id="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            tortor at auctor urna.{" "}
          </p>
        </div>
        <div id="main-bot-cont">
          <img id="gallery" src={models2} />
        </div>
      </section>
    </div>
  );
}
