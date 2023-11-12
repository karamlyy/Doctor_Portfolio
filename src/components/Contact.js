// Contact.js
import React from 'react';
import './Contact.css'; // Import the styles
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import whatsappIcon from '../images/whatsapp.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Əlaqə</h2>
        <p>
        Sualınız var və ya görüş təyin etmək istəyirsiniz? Əlaqə saxlamaqdan çəkinməyin!
        </p>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Mobil: +123 456 7890</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=773172277" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whatsapp" />
          </a>

        </div>

        <form>
          <label htmlFor="name">Adınız:</label>
          <input type="text" id="name" name="name" placeholder="Adınız" required />

          <label htmlFor="email">Mobil Nömrəniz:</label>
          <input type="tel" id="mobileNum" name="mobileNum" placeholder="Mobil nömrəniz" required />

          <label htmlFor="message">Mesajınız:</label>
          <textarea id="message" name="message" placeholder="Mesajınızı daxil edin" required></textarea>

          <button type="submit">Göndər</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
