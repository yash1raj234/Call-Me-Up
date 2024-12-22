import React from 'react';
import { Bot } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Bot className="footer-logo-icon" />
              <span className="footer-logo-text">Call Me Up</span>
            </div>
            <p className="footer-description">
              Transforming customer service with intelligent AI solutions.
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <ul>
              <li>yashrajrai1234@gmail.com</li>
              <li>+91 9770184915</li>
              <li>B-77 , JK Town , Kolar Road Bhopal </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AICallBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
