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
            </span>
          </div>
        </div>
        <div className="bottomSection">
          {" "}
          <p className="bio">
            I'm looking to build my awareness of product design theory and large
            data utilization to create a safer relationship with technology for
            everyone.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
