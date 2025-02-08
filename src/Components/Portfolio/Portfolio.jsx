import React from "react";
import "./Portfolio.css";

const Portfolio = () => (
  <section className="portfolio">
    <h2>Our Work</h2>
    <div className="portfolio-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="portfolio-item">
          <img src={`https://images.pexels.com/photos/2335050/pexels-photo-2335050.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`Project ${item}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
