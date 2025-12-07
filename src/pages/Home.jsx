import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import ContactForm from "../components/ContactForm";

export default function Home(){
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <div className="container" style={{marginTop:30}}>
        <div style={{display:'flex',gap:24,flexWrap:'wrap'}} className="contact-wrap">
          <div className="contact-info">
            <h2 style={{fontSize:28,fontWeight:800}}>Ready to Transform Your Restaurant?</h2>
            <p className="small-muted">Get started with a free demo and see how WhatsApp automation can revolutionize your customer service.</p>
            <div style={{marginTop:22,fontSize:14}}>
              <div><strong>Email Us</strong><div className="small-muted">contact.autowaits@gmail.com</div></div>
              <div style={{marginTop:12}}><strong>Call Us</strong><div className="small-muted">+1 (424) 209-3742</div></div>
              <div style={{marginTop:12}}><strong>Visit Us</strong><div className="small-muted">California, United States</div></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
