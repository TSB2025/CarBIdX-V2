// PATH: frontend/src/pages/Admin/admindashboard.jsx

import React from "react";
import "../../styles/admindashboard.css";
import AdminSidebar from "../../components/Admin/adminsidebar";

export default function AdminDashboard() {
  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <div className="admin-main">

        {/* HEADER */}
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>System control panel for CarBidX administration.</p>
        </div>

        {/* STATS ROW */}
        <div className="admin-stats-row">

          <div className="admin-stat-card">
            <span className="admin-stat-label">Total Dealers</span>
            <span className="admin-stat-value">0</span>
          </div>

          <div className="admin-stat-card">
            <span className="admin-stat-label">Pending Approvals</span>
            <span className="admin-stat-value">0</span>
          </div>

          <div className="admin-stat-card">
            <span className="admin-stat-label">Active Auctions</span>
            <span className="admin-stat-value">0</span>
          </div>

          <div className="admin-stat-card">
            <span className="admin-stat-label">Captured Deposits</span>
            <span className="admin-stat-value">$0</span>
          </div>

        </div>

        {/* ADMIN CONTROLS */}
        <div className="admin-section">
          <h2 className="admin-section-title">System Controls</h2>

          <div className="admin-control-grid">

            <div className="admin-control-card">
              <h3>Approve Dealers</h3>
              <p>Manage dealer verification requests.</p>
              <button className="admin-btn">View Pending Dealers</button>
            </div>

            <div className="admin-control-card">
              <h3>Suspend Dealers</h3>
              <p>Block dealers who violate platform rules.</p>
              <button className="admin-btn">Manage Dealers</button>
            </div>

            <div className="admin-control-card">
              <h3>Suspend Buyers</h3>
              <p>Restrict misuse or repeated ghosting.</p>
              <button className="admin-btn">Manage Buyers</button>
            </div>

            <div className="admin-control-card">
              <h3>Global Deposit Toggle</h3>
              <p>Enable or disable deposit requirements.</p>
              <button className="admin-btn">Open Deposit Settings</button>
            </div>

            <div className="admin-control-card">
              <h3>Maintenance Mode</h3>
              <p>Disable the entire public site instantly.</p>
              <button className="admin-btn">Toggle Maintenance</button>
            </div>

            <div className="admin-control-card">
              <h3>Admin MFA Settings</h3>
              <p>Manage Authenticator, SMS, and Email MFA.</p>
              <button className="admin-btn">Open MFA Panel</button>
            </div>

          </div>
        </div>

        {/* SYSTEM MONITOR */}
        <div className="admin-section">
          <h2 className="admin-section-title">System Monitor</h2>

          <div className="admin-monitor">
            <h3>Auctions Overview</h3>
            <p>No auction activity available.</p>

            <h3>Deposit Activity</h3>
            <p>No deposit records found.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
