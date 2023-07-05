import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a
              href="https://www.linkedin.com/in/andrew-e-lawrence/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/andrewelawrence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-square"></i>
            </a>
            <a
              href="mailto:andrew.e.lawrence@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-inbox"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
