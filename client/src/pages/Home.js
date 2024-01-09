import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import SiteButtons from "./Site-Buttons";

export default function Home() {
  return (
    <>
      <SiteButtons />
      <div className="Profile">
        <div className="topSection">
          {" "}
          <h1 className="profile-name"> Hi, I'm Andrew Lawrence</h1>
          <div className="Typewriter">
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
                      .typeString(" digital systems transformation intern,")
                      .pauseFor(750)
                      .deleteChars(39)
                      .typeString(" developing programmer,")
                      .pauseFor(750)
                      .deleteChars(11)
                      .typeString("designer,")
                      .pauseFor(750)
                      .deleteChars(13)
                      .typeString("er.")
                      .start();
                  }}
                />
              </h1>
            </span>
          </div>
        </div>
        <div className="bottomSection">
          {" "}
          <p className="bio">
            I'm looking to build my awareness of systems design and algorithmic
            fairness to create a safer relationship with technology for
            everyone.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
