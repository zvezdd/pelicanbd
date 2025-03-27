import React from "react";
import "./Welcome.css";

const Welcome = ({ handleLogin }) => {
  return (
    <div className="welcome-container">
      <div className="overlay-text">
        <h1 className="main-title">Pelican AI</h1>
        <p className="main-subtitle">Your Intelligent Legal Assistant</p>
      </div>
      <button
        type="button"
        className="send-button slide-hover"
        onClick={handleLogin}
      >
        <span className="button-text">Get Demo</span>
        <span className="button-overlay"></span>
      </button>
    </div>
  );
};

export default Welcome;
