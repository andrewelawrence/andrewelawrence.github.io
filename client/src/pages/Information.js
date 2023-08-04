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
          <ul>School : Tufts University 2026</ul>
          <ul>
            An undergraduate student who believes that tech product design
          </ul>
        </div>
        <div>
          <h1>My Interests.</h1>
          <p className="interests">
            3D printing{" "}
            <span>
              Watching that first layer be put down never gets old! I love{" "}
            </span>
          </p>
          <p className="interests">
            PC hardware and design
            <span></span>
          </p>
          <p className="interests">
            Spending time outside{" "}
            <span>
              I'm an avid hiker and biker. I love playing soccer in the summer
              and skiing in the winter.
            </span>
          </p>
          <p className="interests">
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
