import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import AIInsights from "./pages/AIInsights";
import Renewals from "./pages/Renewals";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { customers as mockCustomers } from "./services/api";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedCustomerId, setSelectedCustomerId] = useState(mockCustomers[0].id);
  const [searchText, setSearchText] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "I can explain churn risk, highlight expiring contracts, and recommend retention actions."
    }
  ]);

  const filteredCustomers = useMemo(() => {
    return mockCustomers.filter((customer) => {
      const matchesSearch = customer.companyName
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesRegion =
        regionFilter === "All" || customer.region === regionFilter;

      return matchesSearch && matchesRegion;
    });
  }, [searchText, regionFilter]);

  const selectedCustomer =
    mockCustomers.find((customer) => customer.id === selectedCustomerId) ||
    mockCustomers[0];

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onChangePage={setActivePage} />

      <div className="content-shell">
        <Header />

        <main className="main-area">
          {activePage === "home" && (
            <Home
              customers={mockCustomers}
              onSelectCustomer={(id) => {
                setSelectedCustomerId(id);
                setActivePage("customers");
              }}
              onGoToAnalytics={() => setActivePage("ai-insights")}
            />
          )}

          {activePage === "customers" && (
            <Customers
              customers={filteredCustomers}
              selectedCustomer={selectedCustomer}
              searchText={searchText}
              regionFilter={regionFilter}
              setSearchText={setSearchText}
              setRegionFilter={setRegionFilter}
              onSelectCustomer={setSelectedCustomerId}
            />
          )}

          {activePage === "ai-insights" && (
            <AIInsights
              customers={mockCustomers}
              selectedCustomer={selectedCustomer}
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          )}

          {activePage === "renewals" && (
            <Renewals
              customers={mockCustomers}
              onSelectCustomer={(id) => {
                setSelectedCustomerId(id);
                setActivePage("customers");
              }}
            />
          )}

          {activePage === "reports" && <Reports customers={mockCustomers} />}
          {activePage === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
}

export default App;
