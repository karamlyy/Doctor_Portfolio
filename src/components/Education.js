// Education.js
import React from 'react';
import './Education.css'; // Import the styles

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Medical School</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed faucibus nulla vel tincidunt fermentum.
          </p>
        </div>
        <div className="education-item">
          <h3>Residency Program</h3>
          <p>
            Curabitur ac velit vel sem fringilla efficitur.
            Vivamus eu nulla in nunc fermentum fermentum.
          </p>
        </div>
        <div className="education-item">
          <h3>Specialization</h3>
          <p>
            Fusce vehicula ipsum nec sapien eleifend aliquet.
            Nullam aliquam arcu sit amet leo dictum, ut venenatis orci tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
