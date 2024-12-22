import React from 'react';
import { Bot, ChevronRight } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Customer Service with AI
            </h1>
            <p className="hero-description">
            Streamline your communication with our AI-powered callbots. Designed to make calls on your behalf, our intelligent callbots ensure efficient, personalized, and professional interactions, saving you time and boosting productivity. Whether for customer support, appointment scheduling, or follow-ups, our solution delivers seamless, human-like conversations tailored to your needs.            </p>
            <button className="cta-button">
              <span>Get Started</span>
              <ChevronRight className="cta-icon" />
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-image-glow"></div>
            <Bot className="hero-bot-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
