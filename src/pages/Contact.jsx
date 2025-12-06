import React from "react";
import "./contact.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>
          Let’s Talk About Your <span>Restaurant’s Future</span>
        </h1>
        <p>
          Get in touch with our team to learn how we can help automate your
          customer communications.
        </p>
      </header>

      <div className="contact-grid">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <ContactForm />
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our Restaurant Automation? We’re here to help.
            Reach out through any of the channels below.
          </p>

          <div className="info-box">
            <div className="icon">📧</div>
            <div>
              <h4>Email Us</h4>
              <p>contact.autowaits@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>+1 (424) 209-3742</p>
              <span>Mon–Fri, 9am–6pm EST</span>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">💬</div>
            <div>
              <h4>WhatsApp</h4>
              <p>+1 (424) 209-3742</p>
              <span>Quick responses 24/7</span>
            </div>
          </div>

        
          <div className="response-time">
            <div className="icon">⏱️</div>
            <p>
              We typically respond within 2–4 hours during business hours. For
              urgent matters, please call or WhatsApp us directly.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How long does setup take?</h4>
          <p>
            Most restaurants are up and running within 24–48 hours. Our team
            handles the technical setup for you.
          </p>
        </div>

        <div className="faq-item">
          <h4>Do I need technical knowledge?</h4>
          <p>
            Not at all! We provide a simple dashboard and our team handles all
            the technical aspects.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can I try it before committing?</h4>
          <p>
            Yes! All plans include a 3-day free trial with full access to all
            features.
          </p>
        </div>
      </div>
    </div>
  );
}
