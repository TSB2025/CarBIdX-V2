import React from "react";
import { useAuction } from "../../hooks/useAuction";
import Button from "../../components/ui/Button";
import BasicTable from "../../components/tables/BasicTable";

const BuyerDashboard = () => {
  const { myAuctions, loading, refreshAuctions } = useAuction();

  const columns = [
    { key: "requestId", label: "Request ID" },
    { key: "vehicle", label: "Vehicle" },
    { key: "status", label: "Status" },
    { key: "bestOffer", label: "Best offer" },
    { key: "dealerCount", label: "Dealers bidding" },
  ];

  return (
    <main className="page dashboard-page">
      <header className="page-header">
        <div>
          <h1>Buyer dashboard</h1>
          <p>Track your active requests and live dealer bids.</p>
        </div>
        <Button variant="primary" to="/buyer/auctions">
          View all auctions
        </Button>
      </header>

      <section className="card">
        <div className="card-header">
          <h2>Active requests</h2>
          <Button size="sm" onClick={refreshAuctions} disabled={loading}>
            Refresh
          </Button>
        </div>
        <BasicTable
          columns={columns}
          data={myAuctions}
          loading={loading}
          emptyText="No active auctions yet. Start by creating a new vehicle request."
        />
      </section>
    </main>
  );
};

export default BuyerDashboard;
