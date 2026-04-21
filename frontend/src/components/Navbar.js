import React from "react";

function Navbar({ activePage, onChangePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div>
          <p className="eyebrow">Hack2Hire 2026</p>
          <h1 className="brand-title">RetainAI CRM</h1>
          <p className="sidebar-copy">
            Customer intelligence for networking teams.
          </p>
        </div>
      </div>

      <div className="nav-list">
        <button
          className={activePage === "home" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("home")}
        >
          <span className="nav-icon">D</span>
          <span>Dashboard</span>
        </button>
        <button
          className={activePage === "customers" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("customers")}
        >
          <span className="nav-icon">C</span>
          <span>Customers</span>
        </button>
        <button
          className={activePage === "ai-insights" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("ai-insights")}
        >
          <span className="nav-icon">A</span>
          <span>AI Insights</span>
        </button>
        <button
          className={activePage === "renewals" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("renewals")}
        >
          <span className="nav-icon">R</span>
          <span>Renewals</span>
        </button>
        <button
          className={activePage === "reports" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("reports")}
        >
          <span className="nav-icon">P</span>
          <span>Reports</span>
        </button>
        <button
          className={activePage === "settings" ? "nav-button active" : "nav-button"}
          onClick={() => onChangePage("settings")}
        >
          <span className="nav-icon">S</span>
          <span>Settings</span>
        </button>
      </div>

      <div className="sidebar-footer">
        <div className="ai-badge-card">
          <p className="eyebrow">AI Status</p>
          <strong>Insights engine online</strong>
          <p className="sidebar-copy">
            Churn scoring, health summaries, and renewal prompts are active.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
