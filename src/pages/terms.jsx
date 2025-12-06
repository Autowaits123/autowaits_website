import React from "react";

export default function Terms() {
  return (
    <div className="page">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <h1>Terms & Conditions</h1>
        <p>Last updated: {new Date().getFullYear()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Autowaits. By using our website and services, you agree to comply with and be bound by these Terms & Conditions.
        </p>

        <h2>2. Use of Our Service</h2>
        <p>
          You agree to use Autowaits for lawful purposes only and not to engage in any activity that could harm, disrupt, or misuse our platform.
        </p>

        <h2>3. Payments & Billing</h2>
        <p>
          All fees, whether one-time setup or monthly subscriptions, must be paid according to the plan selected. No refunds will be issued after setup work begins.
        </p>

        <h2>4. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and ensuring all information provided is accurate.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All branding, content, code, and materials provided by Autowaits remain our intellectual property unless stated otherwise.
        </p>

        <h2>6. Service Modifications</h2>
        <p>
          We reserve the right to modify or discontinue any feature or pricing plan with or without notice.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Autowaits is not responsible for any damages resulting from misuse, service downtime, or third-party integrations.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate your access if you violate these terms.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For questions about these Terms, please visit our Contact page.
        </p>
      </div>
    </div>
  );
}
