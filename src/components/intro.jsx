import React from "react";
import "./stars.scss";
import Typed from "react-typed";

const Intro = () => {
  return (
    // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">Hello, I am Reshmi Ranjith</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={[
                    "STEMinist",
                    "Full Stack Developer",
                    "Hackathon Enthusiast",
                    "Passionate About Learning",
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <a
                className="button button-a button-big button-rouded js-scroll"
                href="#work"
                role="button"
              >
                View My Work
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
