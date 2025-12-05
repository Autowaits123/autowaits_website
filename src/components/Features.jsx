import React from "react";

const featureList = [
  {title:"Smart Reservations", text:"Automated booking system that handles confirmations and reminders."},
  {title:"Order Management", text:"Process takeaway and delivery orders directly through WhatsApp."},
  {title:"24/7 Support", text:"AI-powered chatbot answers common questions about menu, hours, and services."},
  {title:"Customer Engagement", text:"Send promotions, offers, and loyalty rewards."},
  {title:"Analytics Dashboard", text:"Track conversation metrics, peak hours, and satisfaction."},
  {title:"Secure & Compliant", text:"Enterprise-grade security and GDPR compliance."}
];

export default function Features(){
  return (
    <div className="container" id="features" style={{paddingTop:28}}>
      <h2 style={{textAlign:'center',fontSize:28,fontWeight:800}}>Everything Your Restaurant Needs</h2>
      <p style={{textAlign:'center',color:'var(--muted)',maxWidth:800,margin:'8px auto 20px'}}>Powerful automation features designed specifically for restaurant operations</p>

      <div className="cards">
        {featureList.map((f,i)=>(
          <div className="card" key={i}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:44,height:44,borderRadius:8,background:'#eefcf4',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--green)',fontWeight:700}}>W</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
