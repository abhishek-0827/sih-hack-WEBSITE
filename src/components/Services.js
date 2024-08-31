// components/Services.js
import React, { useState } from 'react';
import './Services.css';
import ServiceModal from './ServiceModal'; // Import the modal component

function Services() {
  const [selectedService, setSelectedService] = useState(null); // State to manage selected service
  const services = [
    {
      title: 'Ground Penetrating Radar',
      description: 'Advanced GPR technology for real-time disaster assessment.',
      image: './images/device.jpg', // Replace with actual image paths
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track and monitor disaster sites with precision.',
      image: './images/m.jpg',
    },
    {
      title: 'On-Site Support',
      description: 'Expert teams ready to assist in disaster situations.',
      image: './images/w.jpg',
    },
    {
      title: 'Disaster Assistance',
      description: 'We bridge the gap between chaos and recovery.',
      image: './images/as.jpg',
    },
  ];

  const handleCardClick = (service) => {
    setSelectedService(service); // Set the selected service to be displayed in the modal
  };

  const closeModal = () => {
    setSelectedService(null); // Close the modal
  };

  return (
    <section className="services" id="services">
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleCardClick(service)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Display modal if a service is selected */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
}

export default Services;
