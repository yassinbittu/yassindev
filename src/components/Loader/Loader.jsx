import React, { useEffect, useState } from "react";
import "./Loader.css";
import myLogo from "/mylogo-load.png"; // logo from public folder

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out a bit before unmount
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // fade after 1s
    const finishTimer = setTimeout(() => onFinish(), 400);     // remove loader after fade

    return () => {
      clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <img src={myLogo} alt="Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
