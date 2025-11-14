import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Buyer
import BuyerLogin from "./pages/buyer/buyerlogin";
import BuyerRegister from "./pages/buyer/buyerregister";
import BuyerVerify from "./pages/buyer/buyerverify";
import BuyerRequest from "./pages/buyer/buyerrequest";
import BuyerDashboard from "./pages/buyer/buyerdashboard";
import BuyerAuctions from "./pages/buyer/buyerauctions";
import BuyerAuctionDetail from "./pages/buyer/buyerauctiondetail";
import BuyerConfirm from "./pages/buyer/buyerconfirm";

// Dealer
import DealerLogin from "./pages/dealer/dealerlogin";
import DealerRegister from "./pages/dealer/dealerregister";
import DealerDashboard from "./pages/dealer/dealerdashboard";
import DealerCreateListing from "./pages/dealer/dealercreatelisting";
import DealerMyListings from "./pages/dealer/dealermylistings";

// Admin
import AdminLogin from "./pages/admin/adminlogin";
import AdminDashboard from "./pages/admin/admindashboard";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />

      {/* Buyer */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/request" element={<BuyerRequest />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/auctions" element={<BuyerAuctions />} />
      <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />

      {/* Dealer */}
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />
      <Route path="/dealer/create-listing" element={<DealerCreateListing />} />
      <Route path="/dealer/listings" element={<DealerMyListings />} />

      {/* Admin */}
      <Route path="/securecmb" element={<AdminLogin />} />
      <Route path="/securecmb/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
