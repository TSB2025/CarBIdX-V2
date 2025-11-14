import React from "react";
import BasicTable from "../../components/tables/BasicTable";

const AdminDashboard = () => {
  // Temporary placeholder metrics until backend is wired
  const metrics = [
    { label: "Active buyer accounts", value: 0 },
    { label: "Active dealer accounts", value: 0 },
    { label: "Live auctions", value: 0 },
  ];

  const metricColumns = [
    { key: "label", label: "Metric" },
    { key: "value", label: "Value" },
  ];

  return (
    <main className="page dashboard-page">
      <header className="page-header">
        <div>
          <h1>Admin dashboard</h1>
          <p>High-level overview of all activity across CarBidX.</p>
        </div>
      </header>

      <section className="card">
        <h2>Platform metrics</h2>
        <BasicTable columns={metricColumns} data={metrics} />
      </section>
    </main>
  );
};

export default AdminDashboard;
