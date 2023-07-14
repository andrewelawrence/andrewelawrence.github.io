import React from "react";
import SiteButtons from "./Site-Buttons";

export default function ErrorPage() {
  return (
    <>
      <SiteButtons />
      <div className="Profile">
        <h1> ERROR 404</h1>
        <p>Page not found. Sorry!</p>
      </div>
    </>
  );
}
