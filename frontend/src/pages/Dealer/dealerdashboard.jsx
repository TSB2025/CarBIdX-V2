// PATH: frontend/src/pages/Dealer/dealerdashboard.jsx

import React from "react";
import "../../styles/dealerdashboard.css";
import DealerSidebar from "../../components/Dealer/dealersidebar";

export default function DealerDashboard() {
  return (
    <div className="dealer-dashboard-container">

      {/* SIDEBAR */}
      <DealerSidebar />

      {/* MAIN CONTENT */}
      <div className="dealer-dashboard-main">

        {/* HEADER */}
        <div className="dealer-dashboard-header">
          <h1>Dealer Dashboard</h1>
          <p>Respond to buyer requests and monitor market activity.</p>
        </div>

        {/* STATS ROW */}
        <div className="dealer-stats-row">

          <div className="dealer-stat-card">
            <span className="dealer-stat-label">Live Buyer Requests</span>
            <span className="dealer-stat-value">0</span>
          </div>

          <div className="dealer-stat-card">
            <span className="dealer-stat-label">Offers Submitted</span>
            <span className="dealer-stat-value">0</span>
          </div>

          <div className="dealer-stat-card">
            <span className="dealer-stat-label">Deals Won</span>
            <span className="dealer-stat-value">0</span>
          </div>

        </div>

        {/* DEALER INSIGHTS PANEL */}
        <div className="dealer-insights-panel">

          <h2 className="dealer-insights-title">Dealer Insights</h2>

          <div className="dealer-insights-grid">

            <div className="insight-box">
              <h3 className="insight-label">Top Buyer Demand</h3>
              <ul className="insight-list">
                <li>Toyota Camry: 0 requests</li>
                <li>Honda Civic: 0 requests</li>
                <li>Tesla Model 3: 0 requests</li>
              </ul>
            </div>

            <div className="insight-box">
              <h3 className="insight-label">Average Winning Margin</h3>
              <p className="insight-value">$0</p>
            </div>

            <div className="insight-box">
              <h3 className="insight-label">Hot ZIP Codes</h3>
              <ul className="insight-list">
                <li>No active ZIP data</li>
              </ul>
            </div>

            <div className="insight-box">
              <h3 className="insight-label">Your Performance</h3>
              <ul className="insight-list">
                <li>Bids Submitted: 0</li>
                <li>Avg Response Time: 0 min</li>
                <li>Win Rate: 0%</li>
              </ul>
            </div>

          </div>
        </div>

        {/* LIVE REQUESTS SECTION */}
        <div className="dealer-live-requests">
          <h2>Live Buyer Requests</h2>
          <p>No active buyer requests.</p>
        </div>

      </div>
    </div>
  );
}
