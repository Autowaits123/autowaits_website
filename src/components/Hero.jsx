import React from "react";

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:12,background:'#ecfdf3',display:'inline-block',padding:'6px 10px',borderRadius:999,color:'var(--green)',marginBottom:12}}>Powered by WhatsApp Business API</div>
          <h1>
            Automate Your Restaurant's <span className="green">WhatsApp Communication</span>
          </h1>
          <p>Transform customer interactions with intelligent automation. Handle reservations, orders, and support 24/7 without lifting a finger.</p>

          <div className="cta-row" style={{justifyContent:'center',marginTop:18}}>
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-ghost">Schedule Demo</button>
          </div>

          <div className="metrics" style={{marginTop:22}}>
            <div className="metric"><h3>10x</h3><p>Faster Response</p></div>
            <div className="metric"><h3>24/7</h3><p>Availability</p></div>
            <div className="metric"><h3>85%</h3><p>Cost Reduction</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
