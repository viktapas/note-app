import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <p>
        Developed by{" "}
        <a
          href="https://github.com/dzenvikas/note-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Vikas Kumar
        </a>{" "}
        for{" "}
        <a
          href="https://automate.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          automate.io
        </a>
      </p>
    </div>
  );
};

export default Footer;
