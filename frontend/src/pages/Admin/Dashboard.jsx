import React from "react";
import BasicTable from "../../components/tables/BasicTable";

const AdminDashboard = () => {
  // Placeholder data wired to live API later
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
          <p>High-level view of activity across the CarBidX platform.</p>
        </div>
      </header>

      <section className="card">
        <h2>Key metrics</h2>
        <BasicTable columns={metricColumns} data={metrics} />
      </section>
    </main>
  );
};

export default AdminDashboard;
