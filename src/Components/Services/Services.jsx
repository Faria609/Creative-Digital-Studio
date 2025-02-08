import React from "react";
import './Services.css';

const Services = () => (
    <section className="services">
      <h1>Our Services</h1>
      <div className="services-grid">
        {['Web Development', 'Branding', '3D Animation', 'VR/AR'].map((service) => (
          <div key={service} className="service-card">
            <h3>{service}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quod minima doloribus sed dolore, esse voluptatem harum nulla repudiandae sunt debitis natus maxime sequi! Unde porro deleniti dolores nemo dolor!</p>
          </div>
        ))}
      </div>
    </section>
  );
  export default Services;
  