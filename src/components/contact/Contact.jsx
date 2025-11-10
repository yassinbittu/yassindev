import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918179456318", "_blank"); // ✅ Your WhatsApp number
  };

  const handleLinkedInClick = () => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // ✅ Open LinkedIn in centered popup
    window.open(
      "https://www.linkedin.com/in/mohammed-yassin-77a056260/",
      "LinkedInProfile",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-intro">
        Let’s collaborate! Fill out the form below or reach me directly at{" "}
        <span>yassin.dev@gmail.com</span>
      </p>

      {/* ✅ Contact Buttons */}
      <div className="contact-buttons">
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
          💬 WhatsApp Me
        </button>
        <button className="linkedin-btn" onClick={handleLinkedInClick}>
          🔗 LinkedIn
        </button>
      </div>

      {/* ✅ Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
