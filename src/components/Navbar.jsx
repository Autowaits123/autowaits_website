import React from "react";

export default function Navbar(){
  return (
    <header className="navbar container" style={{paddingTop:16}}>
      <div className="brand">
        <span className="logo" />
        <div>
          <div style={{fontSize:16}}>Autowaits</div>
          <div style={{fontSize:12,color:'#6b7280'}}>WhatsApp Automation</div>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#cases">Case Studies</a>
        <a href="#docs">Documentation</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
