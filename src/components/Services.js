// Services.js
import React, { useState } from 'react';
import './Services.css'; // Import the styles
import consultationImage from '../images//service1.webp';
import diagnosisImage from '../images/service2.jpg';
import treatmentImage from '../images/service3.jpeg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleServiceClick = (index) => {
    setExpandedService((prevIndex) => (prevIndex === index ? null : index));
  };

  const servicesData = [
    {
      title: 'Consultation',
      description:
        'Personalized consultations to address your health concerns and provide guidance on maintaining a healthy lifestyle. Personalized consultations to address your health concerns and provide guidance on maintaining a healthy lifestyle.',
      image: consultationImage,
    },
    {
      title: 'Diagnosis',
      description:
        'Advanced diagnostic services to accurately identify and understand various health conditions. Advanced diagnostic services to accurately identify and understand various health conditions.',
      image: diagnosisImage,
    },
    {
      title: 'Treatment Plans',
      description:
        'Tailored treatment plans combining traditional and modern approaches for effective and holistic care. Tailored treatment plans combining traditional and modern approaches for effective and holistic care. Tailored treatment plans combining traditional and modern approaches for effective and holistic care. ',
      image: treatmentImage,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Xidmətlər</h2>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service ${expandedService === index ? 'expanded' : ''}`}
            onClick={() => handleServiceClick(index)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{expandedService === index ? service.description : service.description.slice(0, 100) + '...'}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
