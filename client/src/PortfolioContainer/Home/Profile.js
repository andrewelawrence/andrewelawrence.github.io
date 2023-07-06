import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="contact-icons">

            <a 
              href="https://www.linkedin.com/in/andrew-e-lawrence/"
              target="_blank"
              rel="noopener noreferrer"
            > 
            <button className="linked-in-btn">
              <i class="fa fa-linkedin"></i>
            </button>
            </a>

            <a 
              href="https://github.com/andrewelawrence"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="github-btn">
              <i class="fa fa-github-square"></i>
            </button>
            </a>

            <a 
              href="https://www.thingiverse.com/andrewelawrence/designs"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="thingiverse-btn">
              <i class="fa fa-crop"></i>
            </button>
            </a>
            <a 
              href="mailto:andrew.e.lawrence@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="inbox-btn">
              <i class="fa fa-inbox"></i>
            </button>
            </a>
          </div>
          <div className="profile-name-and-typewriter">
            <div className="profile-name">
              <span>
                {" "}
                Hi, I'm{" "}
                <span className="highlighted-text">Andrew Lawrence</span>
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
                        .typeString(
                          " undergraduate student at Tufts University,"
                        )
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
        </div>
      </div>
    </div>
  );
}
