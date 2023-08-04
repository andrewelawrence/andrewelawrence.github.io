import React from "react";
import "./Information.css";
import SiteButtons from "./Site-Buttons";

export default function Information() {
  return (
    <>
      <SiteButtons />
      <div className="information-page">
        <div className="aboutMe">
          <h1> About Me. </h1>
          <ul>Home : Lexington MA</ul>
          <ul>School : Tufts 2026</ul>
          <ul></ul>
          <p>
            I'm an undergraduate student who believes that tech product design
          </p>
        </div>
        <div className="interests">
          <h1>My Interests.</h1>
          <p>3D printing <span>Watching that first layer be put down never gets old! I love </span></p>
          <p>PC hardware and design</p>
          <p>
            Spending time outside{" "}
            <span>
              I'm an avid hiker, biker, and general -iker. I love playing soccer
              in the summer and skiing in the winter.
            </span>
          </p>
          <p>
            Sci-Fi Novels{" "}
            <span>
              I'm currently reading <i>Time Enough For Love</i> by Robert A.
              Heinlein. If you have any recommendations, feel free to reach out
              to me!{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
