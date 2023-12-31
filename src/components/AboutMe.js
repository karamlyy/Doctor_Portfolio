import React from 'react';
import './AboutMe.css';
import profileImage from '../images/doctor.png';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>Haqqımda</h2>
            <p>
              Hi, I'm Dr. Efendi Efendiyev, a passionate and dedicated healthcare professional.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum
              auctor ipsum, vel dapibus libero aliquet non.
            </p>
          </div>
          <div className="about-me-image">
            <img src={profileImage} alt="Dr. Efendi Efendiyev" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
