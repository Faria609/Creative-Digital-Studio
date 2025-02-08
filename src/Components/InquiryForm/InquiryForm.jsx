import React from "react";
import { useForm } from "react-hook-form";
import "./InquiryForm.css";

const InquiryForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <section className="inquiry-form">
      <h2>Project Inquiry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="name">Full Name</label>
        <input id="name" {...register("name", { required: true })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}
        
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email", { required: true })} placeholder="Your Email" />
        {errors.email && <span className="error">Email is required</span>}
        
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} placeholder="Your Message"></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default InquiryForm;
