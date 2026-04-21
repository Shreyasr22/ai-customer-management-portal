import React from "react";

function Dashboard({ customers, onSelectCustomer, onGoToAnalytics }) {
  const riskyCustomers = customers
    .filter((customer) => customer.churnRisk >= 50)
    .sort((a, b) => b.churnRisk - a.churnRisk);
  const priorityCustomers = riskyCustomers.slice(0, 6);
  const expiringContracts = customers.filter(
    (customer) => customer.contractEndsInDays <= 30
  );
  const totalRevenue = customers.reduce(
    (sum, customer) => sum + customer.monthlyRevenue,
    0
  );
  const activeCustomers = customers.filter(
    (customer) => customer.healthScore >= 60
  ).length;

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Customer management made simple</h2>
          <p className="muted-text">
            A clean workspace for customers, renewals, and reporting.
          </p>
        </div>

        <button className="primary-button" onClick={onGoToAnalytics}>
          Open AI Insights
        </button>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <p>Total Customers</p>
          <h3>{customers.length}</h3>
          <span className="trend-positive">+8% this month</span>
        </div>
        <div className="stat-card success">
          <p>Active</p>
          <h3>{activeCustomers}</h3>
          <span className="trend-positive">Retention improving</span>
        </div>
        <div className="stat-card warn">
          <p>Expiring</p>
          <h3>{expiringContracts.length}</h3>
          <span className="trend-negative">Needs follow-up</span>
        </div>
        <div className="stat-card">
          <p>Revenue</p>
          <h3>${Math.round(totalRevenue / 1000)}k</h3>
          <span className="trend-positive">+12% this month</span>
        </div>
      </section>

      <section className="panel priority-panel">
        <div className="panel-header">
          <div>
            <h3>Priority Customers</h3>
            <p className="muted-text">
              Accounts that need attention first based on churn risk and renewal pressure.
            </p>
          </div>
          <span className="pill neutral">Top 6 focus accounts</span>
        </div>

        <div className="priority-grid">
          {priorityCustomers.map((customer) => (
            <div key={customer.id} className="priority-card">
              <div className="priority-card-top">
                <div>
                  <p className="priority-eyebrow">Priority Account</p>
                  <h4>{customer.companyName}</h4>
                </div>
                <span className="pill danger">{customer.churnRisk}% Risk</span>
              </div>

              <div className="priority-metrics">
                <div className="priority-metric">
                  <span>Health</span>
                  <strong>{customer.healthScore}</strong>
                </div>
                <div className="priority-metric">
                  <span>Renewal</span>
                  <strong>{customer.contractEndsInDays}d</strong>
                </div>
              </div>

              <p className="priority-reason">{customer.aiSummary}</p>

              <button
                className="priority-button"
                onClick={() => onSelectCustomer(customer.id)}
                type="button"
              >
                View customer
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
