import React from "react";
import "./Nav-Bar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <div className="NavBar-Home">
          <ul className="Home">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="NavBar-Projects">
          <ul className="Projects">
            <li>
              {" "}
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="NavBar-Information">
          <ul className="Information">
            <li>
              {" "}
              <Link to="/information">Information</Link>
            </li>
          </ul>
        </div>
        <div className="Get-Resume">
          <a
            href="Andrew Lawrence Resume.pdf"
            download="Andrew Lawrence Resume.pdf"
          >
            {" "}
            <button className="Resume"> Want My Resume? </button>
          </a>
        </div>
      </div>
    </>
  );
}
