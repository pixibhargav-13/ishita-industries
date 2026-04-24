import React from 'react';
import './ContactFormSection.css';

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <span className="contact-subheading">GET IN TOUCH</span>
          <h2 className="contact-heading">Start the Conversation</h2>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="firstName" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <input type="text" id="lastName" placeholder="Last Name" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input type="tel" id="contact" placeholder="Contact" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
          </div>
          
          <div className="form-group full-width">
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          
          <div className="form-group full-width">
            <textarea id="message" rows="4" placeholder="Message" required></textarea>
          </div>
          
          <div className="form-submit">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
