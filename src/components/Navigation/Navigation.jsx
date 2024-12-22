import React from 'react';
import { Bot } from 'lucide-react';
import './Navigation.css';

export const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <Bot className="logo-icon" />
            <span className="logo-text">Call Me Up</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};