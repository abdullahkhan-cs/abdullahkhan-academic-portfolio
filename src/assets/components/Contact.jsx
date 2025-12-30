// src/assets/components/Contact.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // ⚠️ IMPORTANT:
  // You must sign up at https://www.emailjs.com/
  // and get your Service ID, Template ID, and Public Key.
  // Then replace the placeholders below.
  const SERVICE_ID = "service_tfgnxie"; // e.g. "service_x8d3s"
  const TEMPLATE_ID = "template_gn9765z"; // e.g. "template_8ds2"
  const PUBLIC_KEY = "esE1Bc7ET59FFD4C_"; // e.g. "user_12345"

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // If using the placeholder keys, show a mock success (for demo) but alert user
    if (SERVICE_ID === "service_placeholder") {
      alert(
        "EmailJS keys are missing! \nPlease open 'src/assets/components/Contact.jsx' and add your Service ID, Template ID, and Public Key to make this work."
      );
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again or contact via LinkedIn.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Let’s Get in Touch</h2>
        <p className="contact-intro">
          Have a project, research idea, or collaboration in mind? I’d love to hear from you!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:abdullah.malokhani@gmail.com"
                className="highlight"
              >
                abdullah.malokhani@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abdullah-khan-49111826b/"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                linkedin.com/in/abdullah-khan-49111826b/
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://www.github.com/Abdullah22588"
                target="_blank"
                rel="noreferrer"
                className="highlight"
              >
                github.com/Abdullah22588
              </a>
            </p>
            <p>
              <strong>Location:</strong> Sindh, Pakistan
            </p>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
