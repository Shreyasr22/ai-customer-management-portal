import React from "react";

function CustomerTable({
  customers,
  searchText,
  regionFilter,
  setSearchText,
  setRegionFilter,
  onSelectCustomer
}) {
  const visibleCustomers = customers.slice(0, 4);

  const getRiskTone = (risk) => {
    if (risk >= 70) return "danger";
    if (risk >= 40) return "warn";
    return "success";
  };

  const getHealthTone = (health) => {
    if (health >= 75) return "success";
    if (health >= 50) return "warn";
    return "danger";
  };

  const initialsFor = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);

  return (
    <div className="panel">
      <div className="panel-header wrap-header">
        <div>
          <h2>Customers</h2>
          <p className="muted-text">
            Browse accounts, review status, and open a full customer profile.
          </p>
        </div>

        <div className="filter-row">
          <input
            className="input-control"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by company name"
          />

          <select
            className="input-control"
            value={regionFilter}
            onChange={(event) => setRegionFilter(event.target.value)}
          >
            <option value="All">All Regions</option>
            <option value="APAC">APAC</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
          </select>
        </div>
      </div>

      <div className="table-wrap">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Region</th>
              <th>Plan</th>
              <th>Health</th>
              <th>Churn Risk</th>
              <th>NPS</th>
            </tr>
          </thead>
          <tbody>
            {visibleCustomers.map((customer) => (
              <tr key={customer.id} onClick={() => onSelectCustomer(customer.id)}>
                <td>
                  <div className="company-cell">
                    <div className="avatar-circle">{initialsFor(customer.companyName)}</div>
                    <div>
                      <strong>{customer.companyName}</strong>
                      <p className="muted-text">Account owner ready</p>
                    </div>
                  </div>
                </td>
                <td>{customer.region}</td>
                <td>
                  <span className="pill neutral">{customer.planTier}</span>
                </td>
                <td>
                  <span className={`pill ${getHealthTone(customer.healthScore)}`}>
                    {customer.healthScore}
                  </span>
                </td>
                <td>
                  <span className={`pill ${getRiskTone(customer.churnRisk)}`}>
                    {customer.churnRisk}%
                  </span>
                </td>
                <td>{customer.nps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p className="muted-text">
          Showing 1-{visibleCustomers.length} of {customers.length} customers
        </p>
        <div className="pagination-row">
          <button className="page-button" type="button">
            Previous
          </button>
          <button className="page-button active" type="button">
            1
          </button>
          <button className="page-button" type="button">
            2
          </button>
          <button className="page-button" type="button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerTable;
