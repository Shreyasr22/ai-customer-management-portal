import React from "react";

function CustomerDetail({ customer }) {
  if (!customer) {
    return null;
  }

  const customerInitials = customer.companyName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header">
          <div className="customer-hero">
            <div className="customer-avatar large">{customerInitials}</div>
            <div>
              <p className="eyebrow">Customer 360</p>
              <h2>{customer.companyName}</h2>
              <p className="muted-text">
                {customer.region} - {customer.planTier} plan
              </p>
            </div>
          </div>

          <div className="score-stack">
            <span className="pill neutral">Health {customer.healthScore}</span>
            <span className="pill danger">Churn {customer.churnRisk}%</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="mini-card">
            <p>Contract End</p>
            <strong>{customer.contractEnd}</strong>
          </div>
          <div className="mini-card">
            <p>NPS Score</p>
            <strong>{customer.nps}</strong>
          </div>
          <div className="mini-card">
            <p>Monthly Revenue</p>
            <strong>${customer.monthlyRevenue.toLocaleString()}</strong>
          </div>
          <div className="mini-card">
            <p>Last Contact</p>
            <strong>{customer.lastContact}</strong>
          </div>
        </div>

        <div className="info-card">
          <div className="panel-header">
            <h3>AI Summary</h3>
            <span className="glow-badge">Live Insight</span>
          </div>
          <p className="muted-text">{customer.aiSummary}</p>
          <div className="action-callout">
            <strong>Recommended Action</strong>
            <p className="muted-text">
              Schedule a renewal discussion within 3 days and review open support issues.
            </p>
          </div>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Health Drivers</h3>
          </div>
          <ul className="bullet-list">
            {customer.healthFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Churn Factors</h3>
          </div>
          <ul className="bullet-list">
            {customer.churnFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Usage Trend</h3>
          </div>
          <div className="list-stack">
            {customer.usageHistory.map((item) => (
              <div key={item.month} className="bar-row">
                <span>{item.month}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: item.usage + "%" }} />
                </div>
                <strong>{item.usage}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Weekly Email Summary</h3>
          </div>
          <div className="info-card">
            <p>
              <strong>Subject:</strong> Weekly account review for {customer.companyName}
            </p>
            <p className="muted-text">
              Health score is {customer.healthScore}/100 and churn risk is{" "}
              {customer.churnRisk}%. Recommended action: review support issues,
              contact the account owner, and prepare the next renewal discussion.
            </p>
          </div>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Device Inventory</h3>
          </div>
          <div className="list-stack">
            {customer.devices.map((device) => (
              <div key={device.id} className="list-row">
                <strong>
                  {device.type} - {device.model}
                </strong>
                <span>{device.quantity} units</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Support Tickets</h3>
          </div>
          <div className="list-stack">
            {customer.tickets.map((ticket) => (
              <div key={ticket.id} className="list-row">
                <div>
                  <strong>{ticket.subject}</strong>
                  <p className="muted-text">
                    {ticket.status} - {ticket.createdAt}
                  </p>
                </div>
                <span className="pill warn">{ticket.severity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerDetail;
