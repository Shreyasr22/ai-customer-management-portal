import React from "react";
import Dashboard from "../components/Dashboard";

function Home({ customers, onSelectCustomer, onGoToAnalytics }) {
  return (
    <Dashboard
      customers={customers}
      onSelectCustomer={onSelectCustomer}
      onGoToAnalytics={onGoToAnalytics}
    />
  );
}

export default Home;
