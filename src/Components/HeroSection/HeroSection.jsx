import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";  
import "aos/dist/aos.css"; 
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero">
      {/* Particle Effects */}
      <Particles
        id="particles-js"
        init={loadFull}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
        }}
      />

      {/* Video Background */}
      <video autoPlay loop muted className="hero-video">
        <source src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4" type="video/mp4" />
      </video>

      <div className="hero-content" data-aos="fade-up">
        <h1>Creative Digital Studio</h1>
        <p>We craft digital experiences that inspire</p>
        <button className="cta-button">View Our Work</button>
      </div>
    </section>
  );
};

export default HeroSection;
