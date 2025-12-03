import React, { useEffect, useState } from "react";
import "./Loader.css";
import myLogo from "/mylogo-load.png"; 

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out a bit before unmount
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000); 
    const finishTimer = setTimeout(() => onFinish(), 400);     

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
