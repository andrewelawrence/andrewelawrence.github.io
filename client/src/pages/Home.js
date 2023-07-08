import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import "../App.css";
import NavBar from "./Nav-Bar";
import SiteButtons from "./Site-Buttons";

export default function Home() {
  return (
    <>
      <SiteButtons />
      <div className="profile-name-and-typewriter">
        <div className="profile-name">
          <span>
            {" "}
            Hi, I'm <span className="highlighted-text">Andrew Lawrence</span>
          </span>
        </div>
        <div className="profile-typewriter">
          <span>
            {" "}
            <h1>
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(60)
                    .changeDeleteSpeed(20)
                    .typeString("An")
                    .typeString(" undergraduate student at Tufts University,")
                    .pauseFor(750)
                    .deleteChars(44)
                    .typeString(" developing programmer,")
                    .pauseFor(750)
                    .deleteChars(11)
                    .typeString("CAD designer,")
                    .pauseFor(750)
                    .deleteChars(17)
                    .typeString("er.")
                    .start();
                }}
              />
            </h1>
            {/* <span className="profile-tagline">
                POSSIBLY SOME TAGLINE GOES HERE.
                </span> */}
          </span>
        </div>
        <div className="resume-button">
          <a
            href="Andrew Lawrence Resume.pdf"
            download="Andrew Lawrence Resume.pdf"
          >
            {" "}
            <button className="get-resume"> Get My Resume </button>
          </a>
        </div>
      </div>
      <NavBar />
    </>
  );
}
