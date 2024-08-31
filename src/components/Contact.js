import React, { useState } from 'react';
import './Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Importing Leaflet components
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { IoLocation } from "react-icons/io5";
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    lat: '',
    lon: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }));
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service information (you need to fill these with your actual service ID, template ID, and user ID)
    const serviceID = 'service_6hpnx4a';
    const templateID = 'template_08tiaea';
    const userID = 'OYKAVTgYemAmHZaGj';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Your message has been sent successfully!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          lat: '',
          lon: '',
        });
      })
      .catch((err) => {
        console.error('Failed to send email. Error: ', err);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>For assistance, please reach out to our support team.</p>

      <div className="contact-options">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Location fields */}
          <input
            type="text"
            placeholder="Latitude"
            value={formData.lat}
            readOnly
          />
          <input
            type="text"
            placeholder="Longitude"
            value={formData.lon}
            readOnly
          />

          <button type="button" onClick={handleGetLocation}>
            Get Current Location
          </button>

          <button type="submit">Submit</button>
        </form>

        <div className="call-option">
          <p>Or give us a call:</p>
          <a href="tel:+1234567890" className="phone-link">
            +1 (234) 567-890
          </a>
        </div>
      </div>

      {/* Show the map when location is available */}
      {formData.lat && formData.lon && (
        <div className="map-container">
          <MapContainer
            center={[formData.lat, formData.lon]}
            zoom={13}
            style={{ height: '400px', width: '100%', marginTop: '20px' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[formData.lat, formData.lon]}>
              <Popup>Your Current Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </section>
  );
}

export default Contact;
