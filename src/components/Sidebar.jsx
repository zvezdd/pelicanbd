import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Pelican</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Chat
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Dashboard
        </NavLink>
      </nav>
      <button 
        className="logout-btn"
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;