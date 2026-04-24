import React from 'react';
import './ContactHeroSection.css';

const ContactHeroSection = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
        <h1 className="contact-hero-title">
          We offer products<br/>
          100% from<br/>
          <span className="contact-hero-highlight">extruded rods,<br/>profiles & section</span>
        </h1>
        <p className="contact-hero-subtitle">
          Connect with our team for tailored solutions, product inquiries, or business<br/>
          collaborations. We ensure prompt communication and dedicated support at every<br/>
          step.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
