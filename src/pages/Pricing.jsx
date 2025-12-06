import React from "react";
import "./Pricing.css"; 

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Simple, Transparent <span>Pricing</span></h1>
      <p className="pricing-subtitle">
        Choose the plan that fits your restaurant's needs. No hidden fees.
      </p>

      <div className="pricing-cards">

        {/* ONE-TIME SETUP PLAN */}
        <div className="pricing-card">
          <div className="pricing-banner one-time">One-Time Setup</div>
          <h2>Setup Fee</h2>
          <p className="price">$800 <span>one-time</span></p>

          <ul className="benefits">
            <li>Full WhatsApp automation setup</li>
            <li>Menu PDF integration</li>
            <li>Reservation system activation</li>
            <li>Chatbot training for your restaurant</li>
            <li>Google Maps & Media Integration</li>
            <li>No monthly fee required</li>
          </ul>

          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>

        {/* MONTHLY PLAN */}
        <div className="pricing-card popular">
          <div className="pricing-banner monthly">Monthly Subscription</div>
          <h2>Automation Plan</h2>
          <p className="price">$49 <span>/month</span></p>

          <ul className="benefits">
            <li>Instant auto-replies</li>
            <li>Order handling automation</li>
            <li>Reservation management</li>
            <li>Menu PDF + media sending</li>
            <li>Free updates & new AI features</li>
            <li>Basic support included</li>
          </ul>

          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
