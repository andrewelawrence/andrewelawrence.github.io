import React from "react";
import "./Projects.css";
import SiteButtons from "./Site-Buttons";

export default function Projects() {
  return (
    <>
      <SiteButtons />
      <div className="projects-page">
        <h1 className="AIessay">Safe AI Development Research Paper</h1>
        <p>
          <a
            href="ML-growth-paper.pdf"
            className="AIessayTitle"
            download="ML-growth-paper.pdf"
          >
            | "Understanding the Risks Posed with the Unregulated ML System
            Growth" |
          </a>
        </p>
        <p>
          This paper dives deep into the risks that unaligned AI pose to our
          society, as well as challenges faced by developers in alignment.
          Besides highlighting those issues, it also bolstered my interest in
          understanding how product development shapes our world.{" "}
        </p>
        <br></br>
        <h1 className="SpotifyPlugin">Smart Spotify Lyrics Display</h1>
        <p>
          I am currently developing a windows app to display real-time Spotify
          song lyrics using Musixmatch's API service on any Windows screen
          (GitHub link soon). This was based out of frustration with Spotify's
          windows integration, as users are required to keep Spotify open in
          order to view the lyrics to their songs.
        </p>
      </div>
    </>
  );
}
