import React from "react";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const DealerDashboard = () => {
  const { dealerAuctions, loading } = useAuction();

  const columns = [
    { key: "requestId", label: "Request ID" },
    { key: "vehicle", label: "Vehicle" },
    { key: "bestOffer", label: "Your best offer" },
    { key: "status", label: "Status" },
  ];

  return (
    <main className="page dashboard-page">
      <header className="page-header">
        <div>
          <h1>Dealer dashboard</h1>
          <p>Live buyer requests in your territory, sorted by opportunity.</p>
        </div>
      </header>

      <section className="card">
        <h2>Assigned requests</h2>
        <BasicTable
          columns={columns}
          data={dealerAuctions}
          loading={loading}
          emptyText="No assigned requests yet."
        />
      </section>
    </main>
  );
};

export default DealerDashboard;
