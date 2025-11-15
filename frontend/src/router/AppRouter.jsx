import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layouts */
import BuyerLayout from "../layouts/BuyerLayout.jsx";
import DealerLayout from "../layouts/DealerLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

/* Public Pages */
import Home from "../pages/Home.jsx";

/* Buyer Pages */
import BuyerDashboard from "../pages/Buyer/BuyerDashboard.jsx";
import BuyerRequests from "../pages/Buyer/BuyerRequests.jsx";
import BuyerAuctions from "../pages/Buyer/BuyerAuctions.jsx";
import BuyerAuctionDetail from "../pages/Buyer/BuyerAuctionDetail.jsx";
import BuyerProfile from "../pages/Buyer/BuyerProfile.jsx";
import BuyerLogin from "../pages/Buyer/BuyerLogin.jsx";
import BuyerRegister from "../pages/Buyer/BuyerRegister.jsx";
import BuyerVerify from "../pages/Buyer/BuyerVerify.jsx";
import BuyerConfirm from "../pages/Buyer/BuyerConfirm.jsx";

/* Single Request Page */
import BuyerRequest from "../pages/Buyer/BuyerRequests.jsx";

/* Dealer Pages */
import DealerDashboard from "../pages/Dealer/DealerDashboard.jsx";
import DealerRequests from "../pages/Dealer/DealerRequests.jsx";
import DealerBids from "../pages/Dealer/DealerBids.jsx";
import DealerResults from "../pages/Dealer/DealerResults.jsx";
import DealerProfile from "../pages/Dealer/DealerProfile.jsx";
import DealerLogin from "../pages/Dealer/DealerLogin.jsx";
import DealerBid from "../pages/Dealer/DealerBid.jsx";

/* Admin Pages */
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import AdminLogin from "../pages/Admin/AdminLogin.jsx";
import AdminApproveDealers from "../pages/Admin/AdminApproveDealers.jsx";
import AdminSuspendDealers from "../pages/Admin/AdminSuspendDealers.jsx";
import AdminSuspendBuyers from "../pages/Admin/AdminSuspendBuyers.jsx";
import AdminMaintenance from "../pages/Admin/AdminMaintenance.jsx";
import AdminDepositSettings from "../pages/Admin/AdminDeposits.jsx";

export default function AppRouter() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />

      {/* BUYER AUTH */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />

      {/* BUYER PROTECTED ROUTES */}
      <Route element={<BuyerLayout />}>
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/requests" element={<BuyerRequests />} />
        <Route path="/buyer/request" element={<BuyerRequest />} />
        <Route path="/buyer/auctions" element={<BuyerAuctions />} />
        <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
        <Route path="/buyer/profile" element={<BuyerProfile />} />
        <Route path="/buyer/confirm" element={<BuyerConfirm />} />
      </Route>

      {/* DEALER AUTH */}
      <Route path="/dealer/login" element={<DealerLogin />} />

      {/* DEALER PROTECTED ROUTES */}
      <Route element={<DealerLayout />}>
        <Route path="/dealer/dashboard" element={<DealerDashboard />} />
        <Route path="/dealer/requests" element={<DealerRequests />} />
        <Route path="/dealer/bids" element={<DealerBids />} />
        <Route path="/dealer/results" element={<DealerResults />} />
        <Route path="/dealer/profile" element={<DealerProfile />} />
        <Route path="/dealer/bid/:id" element={<DealerBid />} />
      </Route>

      {/* ADMIN AUTH */}
      <Route path="/securecmb" element={<AdminLogin />} />

      {/* ADMIN PROTECTED ROUTES */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/approve-dealers" element={<AdminApproveDealers />} />
        <Route path="/admin/suspend-dealers" element={<AdminSuspendDealers />} />
        <Route path="/admin/suspend-buyers" element={<AdminSuspendBuyers />} />
        <Route path="/admin/maintenance" element={<AdminMaintenance />} />
        <Route path="/admin/deposits" element={<AdminDepositSettings />} />
      </Route>

    </Routes>
  );
}
