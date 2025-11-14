import { Link } from "react-router-dom";
import logo from "/logo.png";  // using your new high-quality image

function Navbar() {
  return (
    <nav className="w-full bg-[#0a0f24] border-b border-[#1a2240]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo + Brand */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="CarBidX Logo"
            className="h-14 w-auto object-contain select-none"
          />
          <span className="text-2xl font-semibold tracking-wide text-[#EABE3F] leading-none">
            CarBidX
          </span>
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-10 text-sm font-medium text-white">
          <Link to="/how-it-works" className="hover:text-[#EABE3F] transition">
            How It Works
          </Link>

          <Link to="/buyers" className="hover:text-[#EABE3F] transition">
            Buyers
          </Link>

          <Link to="/dealers" className="hover:text-[#EABE3F] transition">
            Dealers
          </Link>

          <Link to="/contact" className="hover:text-[#EABE3F] transition">
            Contact Us
          </Link>

          <Link
            to="/login"
            className="bg-[#EABE3F] text-[#0a0f24] px-5 py-2 rounded-md font-semibold hover:bg-[#cfa536] transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
