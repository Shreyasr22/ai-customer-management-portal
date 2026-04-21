import React from "react";

function Settings() {
  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Settings</h2>
            <p className="muted-text">
              Demo-ready preferences for notifications, AI prompts, and reminder automation.
            </p>
          </div>
        </div>

        <div className="two-column-grid">
          <div className="mini-card">
            <p>Notification Channel</p>
            <strong>Email + In-app alerts</strong>
          </div>
          <div className="mini-card">
            <p>AI Summary Mode</p>
            <strong>Executive brief</strong>
          </div>
          <div className="mini-card">
            <p>Renewal Reminder</p>
            <strong>3 days before contract end</strong>
          </div>
          <div className="mini-card">
            <p>Churn Threshold</p>
            <strong>50% and above</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
