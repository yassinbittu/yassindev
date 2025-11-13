import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918179456318"; 
    const message = "Hey Yassin! Let’s build something awesome together ";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleLinkedInClick = () => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

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
        <span>yxn.dev1@gmail.com</span>
      </p>

      {/* Contact Buttons */}
      <div className="contact-buttons">
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
          💬 WhatsApp Me
        </button>
        <button className="linkedin-btn" onClick={handleLinkedInClick}>
          🔗 LinkedIn
        </button>
      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent successfully! 🚀");
        }}
      >
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
