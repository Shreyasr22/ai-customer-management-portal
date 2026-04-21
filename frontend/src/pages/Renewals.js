import React from "react";

function Renewals({ customers, onSelectCustomer }) {
  const urgentRenewals = customers.filter(
    (customer) => customer.contractEndsInDays <= 7
  );
  const upcomingRenewals = customers.filter(
    (customer) =>
      customer.contractEndsInDays > 7 && customer.contractEndsInDays <= 30
  );
  const renewalCustomers = [...urgentRenewals, ...upcomingRenewals];

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Renewals</h2>
            <p className="muted-text">
              Watch expiring accounts and keep reminders ready for the team.
            </p>
          </div>
        </div>

        <div className="stats-grid compact-grid">
          <div className="stat-card danger">
            <p>Expiring In 7 Days</p>
            <h3>{urgentRenewals.length}</h3>
          </div>
          <div className="stat-card warn">
            <p>Expiring In 30 Days</p>
            <h3>{renewalCustomers.length}</h3>
          </div>
          <div className="stat-card">
            <p>Auto Reminders</p>
            <h3>{renewalCustomers.length}</h3>
          </div>
        </div>
      </section>

      <section className="two-column-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Expiring In 7 Days</h3>
          </div>
          <div className="list-stack">
            {urgentRenewals.length === 0 && (
              <p className="muted-text">No contracts are expiring within 7 days.</p>
            )}
            {urgentRenewals.map((customer) => (
              <button
                key={customer.id}
                className="list-row clickable-row"
                onClick={() => onSelectCustomer(customer.id)}
              >
                <div>
                  <strong>{customer.companyName}</strong>
                  <p className="muted-text">
                    {customer.contractEnd} - {customer.region}
                  </p>
                </div>
                <span className="pill danger">{customer.contractEndsInDays} days</span>
              </button>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Auto Reminders</h3>
          </div>
          <div className="list-stack">
            {renewalCustomers.length === 0 && (
              <p className="muted-text">No reminders are needed right now.</p>
            )}
            {renewalCustomers.map((customer) => (
              <div key={customer.id} className="list-row">
                <div>
                  <strong>{customer.companyName}</strong>
                  <p className="muted-text">
                    Reminder: notify owner and attach renewal summary.
                  </p>
                </div>
                <span className="pill neutral">Queued</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Renewal List</h3>
        </div>

        <div className="table-wrap">
          <table className="premium-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contract End</th>
                <th>Days Left</th>
                <th>Plan</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {renewalCustomers.map((customer) => (
                <tr key={customer.id} onClick={() => onSelectCustomer(customer.id)}>
                  <td>{customer.companyName}</td>
                  <td>{customer.contractEnd}</td>
                  <td>{customer.contractEndsInDays}</td>
                  <td>{customer.planTier}</td>
                  <td>{customer.churnRisk}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Renewals;
