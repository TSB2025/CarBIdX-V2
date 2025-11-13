import React from "react";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const BuyerAuctions = () => {
  const { myAuctions, loading } = useAuction();

  const columns = [
    { key: "requestId", label: "Request ID" },
    { key: "vehicle", label: "Vehicle" },
    { key: "createdAt", label: "Created" },
    { key: "closingAt", label: "Closing" },
    { key: "status", label: "Status" },
  ];

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>All auctions</h1>
          <p>History of every reverse auction you have created.</p>
        </div>
      </header>

      <section className="card">
        <BasicTable
          columns={columns}
          data={myAuctions}
          loading={loading}
          emptyText="You have no auctions yet."
        />
      </section>
    </main>
  );
};

export default BuyerAuctions;
