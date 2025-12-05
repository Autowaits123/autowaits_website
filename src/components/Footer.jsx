import React from "react";
export default function Footer(){
  return (
    <footer className="footer">
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div style={{fontWeight:700}}>Autowaits</div>
          <div style={{color:'var(--muted)'}}>© {new Date().getFullYear()} Autowaits. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
