import React from "react";
import CustomerTable from "../components/CustomerTable";
import CustomerDetail from "../components/CustomerDetail";

function Customers({
  customers,
  selectedCustomer,
  searchText,
  regionFilter,
  setSearchText,
  setRegionFilter,
  onSelectCustomer
}) {
  return (
    <div className="page-stack">
      <CustomerTable
        customers={customers}
        searchText={searchText}
        regionFilter={regionFilter}
        setSearchText={setSearchText}
        setRegionFilter={setRegionFilter}
        onSelectCustomer={onSelectCustomer}
      />

      <CustomerDetail customer={selectedCustomer} />
    </div>
  );
}

export default Customers;
