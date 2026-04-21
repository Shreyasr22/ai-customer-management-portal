import React from "react";

function Reports({ customers }) {
  const totalRevenue = customers.reduce(
    (sum, customer) => sum + customer.monthlyRevenue,
    0
  );
  const activeCustomers = customers.filter(
    (customer) => customer.healthScore >= 60
  ).length;
  const expiringCustomers = customers.filter(
    (customer) => customer.contractEndsInDays <= 30
  ).length;
  const avgHealth = Math.round(
    customers.reduce((sum, customer) => sum + customer.healthScore, 0) /
      customers.length
  );

  const regionData = ["APAC", "North America", "Europe", "Middle East"].map(
    (region) => ({
      label: region,
      value: customers.filter((customer) => customer.region === region).length
    })
  );

  const planData = ["Starter", "Growth", "Enterprise"].map((plan) => ({
    label: plan,
    value: customers.filter((customer) => customer.planTier === plan).length
  }));

  const totalPlans = planData.reduce((sum, item) => sum + item.value, 0);
  const starterPercent = Math.round((planData[0].value / totalPlans) * 100);
  const growthPercent = Math.round((planData[1].value / totalPlans) * 100);
  const enterprisePercent = 100 - starterPercent - growthPercent;

  const topRevenueCustomers = [...customers]
    .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
    .slice(0, 4);

  const topRiskCustomers = [...customers]
    .sort((a, b) => b.churnRisk - a.churnRisk)
    .slice(0, 4);

  const revenueWave = [68, 74, 71, 83, 88, 94, 91, 97];

  return (
    <div className="page-stack">
      <section className="reports-hero">
        <div className="reports-hero-copy">
          <p className="eyebrow">Reports Command Center</p>
          <h2>See growth, risk, and retention in one glance</h2>
          <p className="muted-text">
            A sharper reporting surface for demo day, built to highlight the business value of your AI portal.
          </p>
        </div>

        <div className="reports-hero-visual">
          <div className="sparkline-card">
            <p>Revenue Momentum</p>
            <div className="sparkline">
              {revenueWave.map((point, index) => (
                <span
                  key={index}
                  className="spark-bar"
                  style={{ height: `${point}%` }}
                />
              ))}
            </div>
            <strong>${Math.round(totalRevenue / 1000)}k</strong>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <p>Total Customers</p>
          <h3>{customers.length}</h3>
          <span className="trend-positive">Pipeline expanded</span>
        </div>
        <div className="stat-card success">
          <p>Active Customers</p>
          <h3>{activeCustomers}</h3>
          <span className="trend-positive">Healthy adoption trend</span>
        </div>
        <div className="stat-card warn">
          <p>Expiring Soon</p>
          <h3>{expiringCustomers}</h3>
          <span className="trend-negative">Needs proactive follow-up</span>
        </div>
        <div className="stat-card">
          <p>Average Health</p>
          <h3>{avgHealth}</h3>
          <span className="trend-positive">Account quality stable</span>
        </div>
      </section>

      <section className="reports-highlight-grid">
        <div className="reports-highlight-card revenue">
          <div className="highlight-label">Revenue Focus</div>
          <h3>${Math.round(totalRevenue / 1000)}k</h3>
          <p>Monthly recurring revenue from all synthetic customer accounts.</p>
        </div>
        <div className="reports-highlight-card health">
          <div className="highlight-label">Retention Signal</div>
          <h3>{avgHealth}/100</h3>
          <p>Average account health shaped by support, sentiment, and usage behavior.</p>
        </div>
        <div className="reports-highlight-card risk">
          <div className="highlight-label">Risk Pressure</div>
          <h3>{topRiskCustomers[0].churnRisk}%</h3>
          <p>Highest churn pressure currently visible in the customer portfolio.</p>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel report-panel-accent">
          <div className="panel-header">
            <h3>Customers by Region</h3>
            <span className="pill neutral">Live split</span>
          </div>

          <div className="chart-stack">
            {regionData.map((item) => (
              <div key={item.label} className="bar-row report-row">
                <span>{item.label}</span>
                <div className="bar-track report-track">
                  <div
                    className="bar-fill report-fill"
                    style={{ width: `${(item.value / customers.length) * 100}%` }}
                  />
                </div>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel report-panel-accent dark-surface">
          <div className="panel-header">
            <h3>Plan Split</h3>
            <span className="pill success">Monetization mix</span>
          </div>

          <div className="pie-layout">
            <div
              className="pie-chart premium-pie"
              style={{
                background: `conic-gradient(#60a5fa 0 ${starterPercent}%, #2563eb ${starterPercent}% ${
                  starterPercent + growthPercent
                }%, #0f172a ${starterPercent + growthPercent}% 100%)`
              }}
            />

            <div className="legend-list">
              <div className="legend-row">
                <span className="legend-dot light-blue" />
                <span>Starter</span>
                <strong>{starterPercent}%</strong>
              </div>
              <div className="legend-row">
                <span className="legend-dot blue" />
                <span>Growth</span>
                <strong>{growthPercent}%</strong>
              </div>
              <div className="legend-row">
                <span className="legend-dot navy" />
                <span>Enterprise</span>
                <strong>{enterprisePercent}%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Top Revenue Accounts</h3>
            <span className="pill success">Opportunity</span>
          </div>
          <div className="list-stack">
            {topRevenueCustomers.map((customer, index) => (
              <div key={customer.id} className="leader-row">
                <div className="leader-rank">{index + 1}</div>
                <div className="leader-copy">
                  <strong>{customer.companyName}</strong>
                  <p className="muted-text">{customer.planTier} plan • {customer.region}</p>
                </div>
                <div className="leader-metric">
                  <strong>${Math.round(customer.monthlyRevenue / 1000)}k</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Top Churn Risks</h3>
            <span className="pill danger">Needs action</span>
          </div>
          <div className="list-stack">
            {topRiskCustomers.map((customer) => (
              <div key={customer.id} className="risk-row">
                <div>
                  <strong>{customer.companyName}</strong>
                  <p className="muted-text">{customer.aiSummary}</p>
                </div>
                <div className="risk-meter">
                  <div className="risk-meter-track">
                    <div
                      className="risk-meter-fill"
                      style={{ width: `${customer.churnRisk}%` }}
                    />
                  </div>
                  <strong>{customer.churnRisk}%</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reports;
