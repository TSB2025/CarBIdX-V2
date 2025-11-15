import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/home";

/* Buyer pages */
import BuyerLogin from "./pages/Buyer/BuyerLogin";
import BuyerRegister from "./pages/Buyer/BuyerRegister";
import BuyerVerify from "./pages/Buyer/BuyerVerify";
import BuyerConfirm from "./pages/Buyer/BuyerConfirm";
import BuyerDashboard from "./pages/Buyer/Dashboard";
import BuyerAuctions from "./pages/Buyer/Auctions";
import BuyerAuctionDetail from "./pages/Buyer/AuctionDetail";

/* Dealer pages */
import DealerLogin from "./pages/Dealer/DealerLogin";
import DealerDashboard from "./pages/Dealer/Dashboard";
import DealerCreateListing from "./pages/Dealer/CreateListing";
import DealerMyListings from "./pages/Dealer/MyListings";

/* Admin pages */
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";

export default function AppRouter() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      {/* Buyer */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/auctions" element={<BuyerAuctions />} />
      <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />

      {/* Dealer */}
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />
      <Route path="/dealer/create-listing" element={<DealerCreateListing />} />
      <Route path="/dealer/listings" element={<DealerMyListings />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
