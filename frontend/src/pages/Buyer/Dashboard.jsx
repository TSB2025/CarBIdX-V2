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
    { key: "dealerCount", label: "Dealers bidding" }
  ];

  return (
    <main className="page dashboard-page text-white">
      <header className="page-header">
        <div>
          <h1 className="text-white">Buyer Dashboard</h1>
          <p className="text-gray-300">Track your active requests and live dealer bids.</p>
        </div>

        <Button
          variant="primary"
          to="/buyer/auctions"
          className="bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold"
        >
          View all auctions
        </Button>
      </header>

      <section className="card bg-[#0A0F24] border border-[#1a2240]">
        <div className="card-header flex items-center justify-between">
          <h2 className="text-white">Active Requests</h2>

          <Button
            size="sm"
            onClick={refreshAuctions}
            disabled={loading}
            className="bg-[#D5B628] hover:bg-[#B69C20] text-black"
          >
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
