import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li onMouseEnter={() => handleMouseEnter('research')} onMouseLeave={handleMouseLeave}>
            <Link to="/research">Research</Link>
            {dropdown === 'research' && (
              <ul className="dropdown">
                <li><Link to="/research/overview">Overview</Link></li>
                <li><Link to="/research/projects">Projects</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/klopp-ai">Klopp AI</Link></li>
          <li><Link to="/for-business">For Business</Link></li>
          <li onMouseEnter={() => handleMouseEnter('api')} onMouseLeave={handleMouseLeave}>
            <Link to="/api">API</Link>
            {dropdown === 'api' && (
              <ul className="dropdown">
                <li><Link to="/api/overview">API Overview</Link></li>
                <li><Link to="/api/login">API Log In</Link></li>
                <li><Link to="/api/pricing">Pricing</Link></li>
                <li><Link to="/api/documentation">Documentation</Link></li>
                <li><Link to="/api/forum">Forum</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/safety">Safety</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;