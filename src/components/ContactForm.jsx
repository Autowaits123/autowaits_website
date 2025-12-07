import React, {useState} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', restaurant:'', city:'', country:'', message:''});
  const [status, setStatus] = useState('');
  const FIRE_PROJECT_ID = process.env.REACT_APP_FIRE_PROJECT_ID;

  const handleChange = e => setForm({...form,[e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    // fast-fail if Firebase isn't configured (common on production if env vars missing)
    if (!FIRE_PROJECT_ID) {
      console.error('Firebase project ID is missing. Set REACT_APP_FIRE_PROJECT_ID in environment.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    try{
      const coll = collection(db, "leads");
      await addDoc(coll, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        restaurant: form.restaurant,
        city: form.city || null,
        country: form.country || null,
        message: form.message,
        createdAt: serverTimestamp()
      });
      setStatus('sent');
      setForm({name:'', email:'', phone:'', restaurant:'', city:'', country:'', message:''});
    }catch(err){
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div id="contact" className="contact-card">
      <form onSubmit={submit}>
        <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email Address *" type="email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} required />
        <input name="restaurant" placeholder="Restaurant Name" value={form.restaurant} onChange={handleChange} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
        <textarea name="message" placeholder="Tell us about your needs..." value={form.message} onChange={handleChange} />
        <button className="btn btn-primary" type="submit" style={{width:'100%'}}>
          {status === 'sending' ? 'Sending...' : 'Schedule Free Demo'}
        </button>
        <div style={{marginTop:10}} className="small-muted">
          {status === 'sent' && "Thank you — we'll contact you soon."}
          {status === 'error' && "There was an error. Try again later."}
        </div>
      </form>
    </div>
  );
}
