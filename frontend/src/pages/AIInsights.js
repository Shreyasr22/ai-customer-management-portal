import React, { useState } from "react";
import Chatbot from "../components/Chatbot";

function AIInsights({ customers, selectedCustomer, chatMessages, setChatMessages }) {
  const [showAllRisks, setShowAllRisks] = useState(false);
  const highRiskCustomers = customers.filter((customer) => customer.churnRisk >= 50);
  const visibleRiskCustomers = showAllRisks
    ? highRiskCustomers.slice(0, 12)
    : highRiskCustomers.slice(0, 5);

  return (
    <div className="page-stack">
      <section className="ai-hero-card">
        <div>
          <p className="eyebrow">AI Insights Engine</p>
          <h2>Retention signals and recommended actions</h2>
          <p className="muted-text">
            Explain risk, understand churn drivers, and turn analytics into next steps.
          </p>
        </div>
        <div className="ai-status-orb" />
      </section>

      <section className="ai-insights-grid">
        <div className="panel ai-glow-panel">
          <div className="panel-header">
            <h3>Priority AI Insight</h3>
            <span className="glow-badge">High Risk</span>
          </div>
          <div className="ai-insight-block">
            <p className="muted-text">Customer</p>
            <strong>{selectedCustomer.companyName}</strong>
          </div>
          <div className="ai-insight-block">
            <p className="muted-text">Reason</p>
            <ul className="bullet-list">
              {selectedCustomer.churnFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </div>
          <div className="ai-insight-block">
            <p className="muted-text">Why the model is confident</p>
            <ul className="bullet-list">
              <li>Contract is approaching a critical renewal window</li>
              <li>Support pressure remains elevated for this account</li>
              <li>Health score and NPS are aligned with churn warning patterns</li>
            </ul>
          </div>
          <div className="action-callout">
            <strong>Recommended Action</strong>
            <p className="muted-text">
              Schedule a retention call in 3 days and share a recovery plan with the account owner.
            </p>
          </div>
        </div>

        <div className="panel ai-side-panel">
          <div className="panel-header">
            <h3>Top Risk Queue</h3>
            <button
              className="text-button"
              type="button"
              onClick={() => setShowAllRisks((current) => !current)}
            >
              {showAllRisks ? "View less" : "View more"}
            </button>
          </div>

          <div className="risk-queue-scroll">
            <div className="list-stack">
              {visibleRiskCustomers.map((customer) => (
                <div key={customer.id} className="list-row">
                  <div>
                    <strong>{customer.companyName}</strong>
                    <p className="muted-text">{customer.aiSummary}</p>
                  </div>
                  <span className="pill danger">{customer.churnRisk}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Chatbot chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default AIInsights;
