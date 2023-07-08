import React from "react";
import "./Site-Buttons.css";

export default function SiteButtons() {
  return (
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
  );
}
