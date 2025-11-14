
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BuyerRequest from "./pages/BuyerRequest";
import BuyerVerify from "./pages/BuyerVerify";
import AuctionLive from "./pages/AuctionLive";
import BuyerConfirm from "./pages/BuyerConfirm";
import DealerLogin from "./pages/DealerLogin";
import DealerRegister from "./pages/DealerRegister";
import DealerDashboard from "./pages/DealerDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/request", element: <BuyerRequest /> },
  { path: "/verify", element: <BuyerVerify /> },
  { path: "/auction/:id", element: <AuctionLive /> },
  { path: "/confirm/:id", element: <BuyerConfirm /> },
  { path: "/dealer/login", element: <DealerLogin /> },
  { path: "/dealer/register", element: <DealerRegister /> },
  { path: "/dealer/dashboard", element: <DealerDashboard /> },
  { path: "/admin/login", element: <AdminLogin /> },
  { path: "/admin/panel", element: <AdminPanel /> },
  { path: "/securecmb", element: <AdminLogin /> }
]);

export default router;
