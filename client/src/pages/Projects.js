import React from "react";
import "./Projects.css";
import SiteButtons from "./Site-Buttons";

export default function Projects() {
  return (
    <>
      <SiteButtons />
      <div className="projects-page">
        <h1 className="MatrixVisualizer">"Algorithmic Realism: Data Science Practices to Promote Social Justice”</h1>
        {/* <p>
          <a
            href="https://github.com/andrewelawrence/Visualizing-3D-Linear-Transformations"
            classname="MatrixVisualizerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </p> */}
        <p>
        I'm currently working with UMSI Professor Ben Green on his upcoming book.
        The book discusses the methodological issues that enable data science 
        practices to perpetuate discrimination and proposes a new methodology
        in response. I am working with Professor Green to adjust the content 
        and ensure that it explains concepts in a clear and effective manner.
        </p>
        <br></br>
        <h1 className="MatrixVisualizer">Simulating Measureable Locality Affects</h1>
        {/* <p>
          <a
            href="https://github.com/andrewelawrence/Visualizing-3D-Linear-Transformations"
            classname="MatrixVisualizerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </p> */}
        <p>
        I've implemented a blocked, unboxed two-dimensional array, UArray2b, in
        C based on Dave Hanson’s unboxed array interface. From there I developed
        a polymorphic method suite that used the UArray2b interface in 
        conjunction with an unblocked UArray2 interface I also developed in 
        order to measure mapping speeds through a series of PPM image rotations.
        I achieved a final measured best-case-scenario cache hit rate increase
        of 50% compared to a traditional UArray2 by optimizing element locality.
        </p>
        <br></br>
        <h1 className="Gerp">Gerp - a UNIX Grep Derivative</h1>
        {/* <p>
          <a
            href="https://github.com/andrewelawrence/grep-sim"
            classname="GerpLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </p> */}
        <p>
          The Gerp program attempts to recreate UNIX's "grep" command which, at
          a basic level, finds all instances of some word in a given directory
          and prints them out to the user. By utilizing a N-ary directory tree
          and hash table paired with a 2D array, Gerp achieves this with a
          linear O(n) time and space indexing complexity and a constant O(1)
          querying time.
        </p>
        <br></br>
        <h1 className="AlgorithmPaper">
          Ethical Evaluation of Decision-Making Algorithms
        </h1>
        <p>
          {/* <a
            href="ML-growth-paper.pdf"
            className="AlgoEssayTitle"
            download="Algo-ethical-analysis-paper.pdf"
          >
            Download Paper Here
          </a> */}
        </p>
        <p>
          {" "}
          This paper examines the structural features that enable discriminatory
          outputs from algorithms. Primarily looking at how predictive parity
          and error rate balancing are incompatible, the paper then reviews some
          recent developments in algorithmic fairness philosophy and provides an
          ethical analysis of the current situation.
        </p>
        <br></br>
        <h1 className="Splendor">Splendor</h1>
        {/* <p>
          <a
            href="https://github.com/andrewelawrence/splendor-sim"
            classname="SplendorLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </p> */}
        <p>
          As a primary introduction to c++, Splendor emulates the popular board
          game that goes by the same name. The program was designed with clear
          class hierarchy and memory usage in mind; utilizing a C++ vector to
          store Card pointers associated to two Players in the Game. The game
          can be played both through the command line and via file input.
        </p>
        <br></br>
        <h1 className="AIpaper">Risk Analysis of Growth in AI Capabilities</h1>
        <p>
          {/* <a
            href="ML-growth-paper.pdf"
            className="AIEssayTitle"
            download="ML-growth-paper.pdf"
          >
            Download Paper Here
          </a> */}
        </p>
        <p>
          This paper dives deep into the risks that unaligned AI pose to our
          society, as well as the technical barriers faced by developers in
          alignment. Besides highlighting those issues, it also bolstered my
          interest in understanding how product development shapes our world.{" "}
        </p>
        <br></br>
        <h1 className="PrinterDev">
          Creality Ender 3 Pro Firmware Development
        </h1>
        <p>
          After discovering that Creality's proprietry firmware for autoleveling
          bed upgrades to the Ender 3 Pro did not work with the 4.2.2
          motherboard, I researched and pieced together a custom Marlin firmware
          that uses 16 point mesh mapping to accurately capture the bed map.
        </p>
      </div>
    </>
  );
}
