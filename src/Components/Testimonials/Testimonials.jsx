import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Daisy",
    position: "CEO, XYZ Company",
    image: "https://images.pexels.com/photos/16136812/pexels-photo-16136812/free-photo-of-woman-sitting-on-chair-in-studio-using-professional-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "This team exceeded our expectations! The quality of work was outstanding.",
  },
  {
    name: "Sophia",
    position: "Marketing Director, ABC Ltd.",
    image: "https://images.pexels.com/photos/6213567/pexels-photo-6213567.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Fantastic experience! Their creativity and professionalism are top-notch.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Clients Say</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.quote}"</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
