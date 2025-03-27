import React from "react";
import homeimg from "../images/homeimg.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img src={homeimg} alt="Background" className="background-image" />
        <div className="overlay"></div>

        <h1 className="title">pelican bd</h1>
        <h1 className="subtitle">
          Your Trusted Business & Accounting AI Agent
        </h1>
      </div>

      <div className="contact-section">
        <form className="contact-form">
          <h2>Contact Us</h2>

          <div className="form-group">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-group">
            <textarea id="message" placeholder=" " required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
