import React from 'react';
import './Help.css'

const HelpAndSupport = () => {
  return (
    <div className="help-and-support">
      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>How do I report a missing grade?</h3>
          <p>To report a missing grade, navigate to the Grade Report page and use the Missing Grade Form.</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Support</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupport;
