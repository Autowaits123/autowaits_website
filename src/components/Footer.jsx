import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ fontWeight: 700 }}>Autowaits</div>
            <Link to="/terms" style={{ color: "var(--muted)" }}>
              Terms & Conditions
            </Link>
          </div>

          <div style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Autowaits. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
