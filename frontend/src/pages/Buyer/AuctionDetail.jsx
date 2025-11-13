import React from "react";
import { useParams } from "react-router-dom";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const BuyerAuctionDetail = () => {
  const { id } = useParams();
  const { getAuctionById, loading } = useAuction();

  const auction = getAuctionById(id);

  const bidColumns = [
    { key: "dealerName", label: "Dealer" },
    { key: "price", label: "Offer price" },
    { key: "expiresIn", label: "Valid for" },
    { key: "notes", label: "Notes" },
  ];

  if (!auction && !loading) {
    return (
      <main className="page">
        <h1>Auction not found</h1>
        <p>Check the link or go back to your dashboard.</p>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>Request {auction?.requestId || id}</h1>
          <p>{auction?.vehicle}</p>
        </div>
      </header>

      <section className="card">
        <h2>Dealer bids</h2>
        <BasicTable
          columns={bidColumns}
          data={auction?.bids || []}
          loading={loading}
          emptyText="No bids yet. Dealers will see this request as soon as it goes live."
        />
      </section>
    </main>
  );
};

export default BuyerAuctionDetail;
