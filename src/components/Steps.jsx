import React from "react";

const steps = [
  {title:"Connect WhatsApp", text:"Link your WhatsApp Business account in minutes. No technical setup required."},
  {title:"Customize Automation", text:"Configure responses, menus, booking rules and workflows."},
  {title:"Go Live", text:"Start handling customer inquiries, orders and reservations automatically."},
  {title:"Scale & Optimize", text:"Monitor performance and continuously improve the experience."}
];

export default function Steps(){
  return (
    <div className="steps container" style={{margin:'28px auto', padding:'0 16px', maxWidth:1200}}>
      <h2 style={{textAlign:'center',fontSize:28,fontWeight:800}}>Get Started in 4 Simple Steps</h2>
      <p style={{textAlign:'center',color:'var(--muted)',maxWidth:800,margin:'8px auto 22px'}}>From setup to success in less than 24 hours</p>
      <div className="step-list" style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:20,margin:'0 auto',maxWidth:1100}}>
        {steps.map((s,i)=>(
          <div className="step" key={i} style={{flex:'0 1 260px',margin:8}}>
            <div style={{fontWeight:800,fontSize:18,color:'var(--green)'}}>Step {i+1}: {s.title}</div>
            <div style={{color:'var(--muted)',marginTop:8}}>{s.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
