import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);

  // prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <header className="navbar container" style={{paddingTop:16}}>
      <div className="brand">
        <img src={logo} alt="Autowaits" className="nav-logo" />
        <div>
          <div style={{fontSize:16, color:'#16a34a'}}>Autowaits</div>
          <div style={{fontSize:12,color:'#6b7280'}}>WhatsApp Automation</div>
        </div>
      </div>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden={!open}>
        <NavLink to="/home" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/pricing" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Pricing</NavLink>
        <NavLink to="/casestudies" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Case Studies</NavLink>
        <NavLink to="/contact" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Contact</NavLink>
      </nav>
    </header>
  );
}
