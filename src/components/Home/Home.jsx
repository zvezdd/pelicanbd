import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Инициализация наблюдателя за элементами с классом .animate
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="welcome-container animate">
        <h1 className="welcome-title">Welcome to Klopp AI</h1>
      </div>

      <div className="chat-insert animate">
        <h2>Start the Chat</h2>
        <button className="login-btn">Start</button>
      </div>

      <section className="why-us animate">
        <h2 className="section-title">Why Us?</h2>
        <p>
          Our product offers unique features and benefits that set us apart from our competitors.
        </p>
      </section>

      <section className="subscription-comparison animate">
        <h2 className="section-title">Subscription Comparison</h2>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Free</h3>
            <p>Basic Functions</p>
            <p>Limited access</p>
          </div>
          <div className="pricing-card">
            <h3>Premium - $15/month</h3>
            <p>Advanced Features</p>
            <p>Unlimited access</p>
          </div>
        </div>
      </section>

      <section className="news-section animate">
        <h2 className="section-title">News</h2>
        <p>
          Stay up to date with the latest updates from Klopp AI.
        </p>
      </section>

      <section className="get-started animate">
        <h2 className="section-title">Get Started with Klopp</h2>
        <p>
          Join today and experience the power of AI.
        </p>
        <button className="login-btn">Sign in</button>
      </section>
    </div>
  );
};

export default Home;
