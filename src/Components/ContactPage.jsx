import React from "react";
import "../Css/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactpage">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact <span>Us</span></h1>
        <p>We’d love to hear from you 🌱</p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Your Name"  />
            <input type="email" placeholder="Your Email"  />
            <textarea placeholder="Your Message" rows="5" ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>123 Green Street, Eco City, India</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@plantify.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
