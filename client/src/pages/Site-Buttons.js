import React from "react";
import "./Site-Buttons.css";
import { Link } from "react-router-dom";

export default function SiteButtons() {
  return (
    <div className="contact-icons">
      <div class="menu-container">
        <button class="hamburger"></button>
        <div class="menu-items">
          <ul className="Home">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>{" "}
          <ul className="Projects">
            <li>
              {" "}
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <ul className="Information">
            <li>
              {" "}
              <Link to="/information">About Me</Link>
            </li>
          </ul>
          <a
            href="Andrew Lawrence Resume.pdf"
            download="Andrew Lawrence Resume.pdf"
          >
            {" "}
            <button className="Resume"> Download Resume </button>
          </a>
        </div>
      </div>

      {/* <section class="p-menu1">
        <nav id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label class="hamburger1" for="toggle1">
            <div class="top"></div>
            <div class="meat"></div>
            <div class="bottom"></div>
          </label>

          <nav class="menu1">
            <ul className="Home">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
            </ul>{" "}
            <ul className="Projects">
              <li>
                {" "}
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
            <ul className="Information">
              <li>
                {" "}
                <Link to="/information">About Me</Link>
              </li>
            </ul>
            <a
              href="Andrew Lawrence Resume.pdf"
              download="Andrew Lawrence Resume.pdf"
            >
              {" "}
              <button className="Resume"> Download Resume </button>
            </a>
          </nav>
        </nav>
      </section> */}

      {/* <details>
        <summary></summary>
        <nav class="menu1">
          <ul className="Home">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>{" "}
          <ul className="Projects">
            <li>
              {" "}
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <ul className="Information">
            <li>
              {" "}
              <Link to="/information">About Me</Link>
            </li>
          </ul>
          <a
            href="Andrew Lawrence Resume.pdf"
            download="Andrew Lawrence Resume.pdf"
          >
            {" "}
            <button className="Resume"> Download Resume </button>
          </a>
        </nav>
      </details> */}
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
  );
}
