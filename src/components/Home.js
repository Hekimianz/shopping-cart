import React from "react";
import "./Home.css";
import mountain from "../assets/hero.jpg";
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
            <a href="/shop">
              <button id="button">SHOP</button>
            </a>
          </div>
          <img id="mountain" src={mountain} alt="mountain with white halo" />
        </div>
        <div id="main-mid-cont">
          <img id="models1" src={models1} alt="two models" />
          <p id="paragraph">
            Discover the dark side of fashion with Black Sky. Our collection of
            versatile clothing will help you unleash your style and find your
            inner rebel. Shop now and step into the sky.{" "}
          </p>
        </div>
        <div id="main-bot-cont">
          <img id="gallery" src={models2} alt="models" />
        </div>
      </section>
    </div>
  );
}
