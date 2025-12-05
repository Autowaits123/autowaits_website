import React, {useState} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', restaurant:'', message:''});
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({...form,[e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try{
      const coll = collection(db, "leads");
      await addDoc(coll, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        restaurant: form.restaurant,
        message: form.message,
        createdAt: serverTimestamp()
      });
      setStatus('sent');
      setForm({name:'', email:'', phone:'', restaurant:'', message:''});
    }catch(err){
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div id="contact" className="contact-card">
      <h3 style={{marginTop:0}}>Schedule Free Demo</h3>
      <form onSubmit={submit}>
        <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email Address *" type="email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} required />
        <input name="restaurant" placeholder="Restaurant Name" value={form.restaurant} onChange={handleChange} />
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
