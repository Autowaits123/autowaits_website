import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./caseStudies.css";
import caseStudiesData from "../Data/caseStudiesData";

export default function CaseStudies() {
  const [selected, setSelected] = useState(caseStudiesData[0]);

  return (
    <div className="case-container">
      <header className="case-header">
        <h1>Success Stories From Real Restaurant</h1>
        <p>See how restaurants used our automation to improve operations.</p>
      </header>

      <div className="case-selector">
        {caseStudiesData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`case-tab ${
              selected.id === item.id ? "active" : ""
            }`}
          >
            {item.company}
          </button>
        ))}
      </div>

      <div className="case-content">
        <h2>{selected.title}</h2>

        <section className="case-block">
          <h3>Problem</h3>
          <p>{selected.problem}</p>
        </section>

        <section className="case-block">
          <h3>Benefits</h3>

          {selected.metrics && (
            <div className="results-grid">
              {selected.metrics.map((m, i) => (
                <div className="metric-card" key={i}>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {selected.keyResults && (
            <div className="key-results">
              <h4>Key Results:</h4>
              <ul>
                {selected.keyResults.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="case-testimonial">
          <p className="quote">“{selected.testimonial}”</p>
          <p className="author">{selected.author}</p>
        </section>
      </div>

      <div className="case-cta">
        <h2>Want results like these?</h2>
        <p>Let our automation handle your customers 24/7.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
  );
}
