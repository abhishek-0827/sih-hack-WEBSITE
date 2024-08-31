// components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-item">
            <p>
              We have developed an advanced device designed specifically for locating individuals trapped in disaster-stricken areas. Utilizing state-of-the-art ground-penetrating radar (GPR) technology, our device can detect human presence through debris, rubble, and other obstacles, enabling rescue teams to locate affected individuals with high precision.
            </p>
            <p>
              We offer a range of essential services to support disaster response efforts:
            </p>           
            <ul>
              <li><strong>Real-Time Disaster Assessment:</strong> Immediate data and analysis of disaster areas using our GPR technology.</li>
              <li><strong>24/7 Monitoring and Support:</strong> Continuous monitoring and expert assistance to ensure efficient rescue operations.</li>
              <li><strong>On-Site Assistance:</strong> Deployment of our trained teams to disaster zones for hands-on support and coordination.</li>
            </ul>
            <p>
              Since the introduction of our device, we have played a crucial role in numerous disaster scenarios, helping rescue teams locate and save lives. Our technology has proven to be an invaluable asset in crisis situations, and we remain committed to advancing our solutions to meet the evolving needs of disaster response.
            </p>
            <p>
           At Unravellators, we believe in leveraging technology and expertise to make a meaningful difference in disaster response. Our commitment is to enhance the effectiveness of rescue efforts and ensure that every affected individual receives the help they need.
        </p>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default About;
