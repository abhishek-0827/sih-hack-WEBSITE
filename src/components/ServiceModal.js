// components/ServiceModal.js
import React from 'react';
import './ServiceModal.css'; // Import CSS for modal styling

function ServiceModal({ service, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
    </div>
  );
}

export default ServiceModal;
