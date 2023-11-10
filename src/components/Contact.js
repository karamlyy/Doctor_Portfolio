// Contact.js
import React from 'react';
import './Contact.css'; // Import the styles
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>
          Have a question or want to schedule an appointment? Feel free to reach out!
        </p>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          {/* Add more social media links as needed */}
        </div>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
