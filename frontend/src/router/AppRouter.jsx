---BEGIN CODE---
import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layouts */
import BuyerLayout from "../layouts/BuyerLayout.jsx";
import DealerLayout from "../layouts/DealerLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

/* Public Pages */
import Home from "../pages/home.jsx";

/* Buyer Pages */
import BuyerDashboard from "../pages/Buyer/buyerdashboard.jsx";
import BuyerRequests from "../pages/Buyer/buyerrequests.jsx";
import BuyerAuctions from "../pages/Buyer/buyerauctions.jsx";
import BuyerAuctionDetail from "../pages/Buyer/buyerauctiondetail.jsx";
import BuyerProfile from "../pages/Buyer/buyerprofile.jsx";
import BuyerLogin from "../pages/Buyer/buyerlogin.jsx";
import BuyerRegister from "../pages/Buyer/buyerregister.jsx";
import BuyerVerify from "../pages/Buyer/buyerverify.jsx";
import BuyerConfirm from "../pages/Buyer/buyerconfirm.jsx";

/* Single Request Page */
import BuyerRequest from "../pages/Buyer/buyerrequests.jsx";

/* Dealer Pages */
import DealerDashboard from "../pages/Dealer/dealerdashboard.jsx";
import DealerRequests from "../pages/Dealer/dealerrequests.jsx";
import DealerBids from "../pages/Dealer/dealerbids.jsx";
import DealerResults from "../pages/Dealer/dealerresults.jsx";
import DealerProfile from "../pages/Dealer/dealerprofile.jsx";
import DealerLogin from "../pages/Dealer/dealerlogin.jsx";
import DealerBid from "../pages/Dealer/dealerbid.jsx";

/* Admin Pages */
import AdminDashboard from "../pages/Admin/admindashboard.jsx";
import AdminLogin from "../pages/Admin/adminlogin.jsx";
import AdminApproveDealers from "../pages/Admin/adminapprovedealers.jsx";
import AdminSuspendDealers from "../pages/Admin/adminsuspenddealers.jsx";
import AdminSuspendBuyers from "../pages/Admin/adminsuspendbuyers.jsx";
import AdminMaintenance from "../pages/Admin/adminmaintenance.jsx";
import AdminDepositSettings from "../pages/Admin/admindeposits.jsx";

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
---END CODE---
