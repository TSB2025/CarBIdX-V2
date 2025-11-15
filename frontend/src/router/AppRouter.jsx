// PATH: frontend/src/router/AppRouter.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

/* Home */
import Home from "../pages/home";

/* Buyer pages */
import BuyerLogin from "../pages/Buyer/buyerlogin";
import BuyerRegister from "../pages/Buyer/buyerregister";
import BuyerVerify from "../pages/Buyer/buyerverify";
import BuyerDashboard from "../pages/Buyer/buyerdashboard";
import BuyerAuctions from "../pages/Buyer/buyerauctions";
import BuyerAuctionDetail from "../pages/Buyer/buyerauctiondetail";
import BuyerConfirm from "../pages/Buyer/buyerconfirm";
import BuyerRequests from "../pages/Buyer/buyerrequests";
import BuyerProfile from "../pages/Buyer/buyerprofile";

/* Dealer pages */
import DealerLogin from "../pages/Dealer/dealerlogin";
import DealerDashboard from "../pages/Dealer/dealerdashboard";
import DealerRequests from "../pages/Dealer/dealerrequests";
import DealerBids from "../pages/Dealer/dealerbids";
import DealerResults from "../pages/Dealer/dealerresults";
import DealerProfile from "../pages/Dealer/dealerprofile";

/* Admin pages */
import AdminLogin from "../pages/Admin/adminlogin";
import AdminDashboard from "../pages/Admin/admindashboard";
import AdminApproveDealers from "../pages/Admin/adminapprovedealers";
import AdminSuspendDealers from "../pages/Admin/adminsuspenddealers";
import AdminSuspendBuyers from "../pages/Admin/adminsuspendbuyers";
import AdminDepositSettings from "../pages/Admin/admindeposits";
import AdminMaintenance from "../pages/Admin/adminmaintenance";
import AdminMFA from "../pages/Admin/adminmfa";

/* Global */
import Logout from "../pages/logout";

export default function AppRouter() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* BUYER ROUTES */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/auctions" element={<BuyerAuctions />} />
      <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />
      <Route path="/buyer/requests" element={<BuyerRequests />} />
      <Route path="/buyer/profile" element={<BuyerProfile />} />

      {/* DEALER ROUTES */}
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />
      <Route path="/dealer/requests" element={<DealerRequests />} />
      <Route path="/dealer/bids" element={<DealerBids />} />
      <Route path="/dealer/results" element={<DealerResults />} />
      <Route path="/dealer/profile" element={<DealerProfile />} />

      {/* ADMIN ROUTES */}
      <Route path="/securecmb" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/approve-dealers" element={<AdminApproveDealers />} />
      <Route path="/admin/suspend-dealers" element={<AdminSuspendDealers />} />
      <Route path="/admin/suspend-buyers" element={<AdminSuspendBuyers />} />
      <Route path="/admin/deposits" element={<AdminDepositSettings />} />
      <Route path="/admin/maintenance" element={<AdminMaintenance />} />
      <Route path="/admin/mfa" element={<AdminMFA />} />

      {/* LOGOUT */}
      <Route path="/logout" element={<Logout />} />

    </Routes>
  );
}
