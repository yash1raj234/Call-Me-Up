import React, { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;