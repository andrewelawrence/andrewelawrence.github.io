import React from "react";
import "./Nav-Bar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <ul className="Home">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="Projects">
          <li>
            {" "}
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div>
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
          <button className="Resume"> Want my resume? </button>
        </a>
      </div>
    </>
  );
}
