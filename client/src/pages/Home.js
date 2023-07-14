import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
// import NavBar from "./Nav-Bar";
import SiteButtons from "./Site-Buttons";

export default function Home() {
  return (
    <>
      <SiteButtons />
      <div className="Profile">
        <div className="profile-name">
          <span> Hi, I'm Andrew Lawrence</span>
        </div>
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
        {/* <div className="Bio">
          <h1></h1>
          <span className="profile-tagline">
            I firmly believe that in our to safe guard our future we must focus
            on safe and smart product design.
          </span>
        </div> */}
      </div>
      {/* <NavBar /> */}
    </>
  );
}
