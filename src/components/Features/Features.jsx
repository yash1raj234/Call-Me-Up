import React from 'react';
import { Phone, MessageSquare, Users } from 'lucide-react';
import './Features.css';

export const Features = () => {
  const features = [
    {
      icon: <Phone />,
      title: 'Advanced AI Technology',
      description: 'Our state-of-the-art AI handles complex customer inquiries with ease and precision.'
    },
    {
      icon: <MessageSquare />,
      title: 'Smart Conversations',
      description: 'Natural language processing for human-like interactions.'
    },
    {
      icon: <Users />,
      title: 'Scalable Solution',
      description: 'Handle multiple customer queries simultaneously with ease.'
    }
  ];

  return (
    <section className="features">
      <h2 className="features-title">What We Do</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
