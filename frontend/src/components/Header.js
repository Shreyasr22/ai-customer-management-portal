import React from "react";

function Header() {
  return (
    <header className="top-header">
      <div>
        <p className="header-label">AI Smart Customer Portal</p>
        <h2 className="header-title">Predict churn. Track renewals. Automate retention.</h2>
      </div>

      <div className="header-actions">
        <div className="header-search">
          <span className="header-icon">⌕</span>
          <input placeholder="Search customers, contracts, or tickets" />
        </div>
        <button className="icon-button" type="button">
          3
        </button>
        <div className="profile-chip">
          <div className="avatar-chip">S</div>
          <div>
            <strong>Sanjan</strong>
            <p>Frontend Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
