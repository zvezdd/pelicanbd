// import React from "react";
// import "./Welcome.css";

// const Welcome = ({ handleLogin }) => {
//   return (
//     <div className="welcome-container">
//       <div className="overlay-text">
//         <h1 className="main-title">Pelican AI</h1>
//         <p className="main-subtitle">Your Intelligent Legal Assistant</p>
//       </div>
//       <button
//         type="button"
//         className="send-button slide-hover"
//         onClick={handleLogin}
//       >
//         <span className="button-text">Get Demo</span>
//         <span className="button-overlay"></span>
//       </button>
//     </div>
//   );
// };

// export default Welcome;

// pages/Welcome.jsx
// pages/Welcome.jsx
// pages/Welcome.jsx
import React, { useEffect, useRef } from 'react';
import './Welcome.css';

const Welcome = ({ handleLogin }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title animate" ref={(el) => (sectionRefs.current[0] = el)}>
        Pelican BD
      </h1>
      <h3 className='title'>place where your dreams achieved</h3>
      
      <section
        className="features-section animate"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h2 className="section-title">What do you get:</h2>
        <div className="features-content">
          <div className="user-benefits">
            <h3>You are:</h3>
            <ul>
              <li>A curious explorer seeking knowledge</li>
              <li>An innovator pushing boundaries</li>
              <li>A problem-solver looking for solutions</li>
              <li>A dreamer with big ideas</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="product-features">
            <h3>We offer:</h3>
            <ul>
              <li>AI-powered insights 24/7</li>
              <li>Real-time data analysis</li>
              <li>Customizable workflows</li>
              <li>Seamless integration tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="pricing-section animate"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <h2 className="section-title">Pricing Plans</h2>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">$10/mo</p>
            <p>Perfect for individuals starting their journey</p>
            <ul>
              <li>100 AI queries/month</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p className="price">$20/mo</p>
            <p>Ideal for professionals and small teams</p>
            <ul>
              <li>500 AI queries/month</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">$30/mo</p>
            <p>For businesses scaling their operations</p>
            <ul>
              <li>Unlimited AI queries</li>
              <li>Full analytics suite</li>
              <li>24/7 dedicated support</li>
            </ul>
          </div>
        </div>
      </section>

      <button
        className="login-btn animate"
        onClick={handleLogin}
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        Get Started with Google
      </button>
    </div>
  );
};

export default Welcome;
