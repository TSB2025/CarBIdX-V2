import { Link } from "react-router-dom";
import logo from "/logo.webp";

function Navbar() {
  return (
    <nav className="w-full bg-[#0a0f24] border-b border-[#1a2240]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CarBidX Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-[#f5c518]">
            CarBidX
          </span>
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/how-it-works" className="hover:text-[#f5c518]">
            How It Works
          </Link>

          <Link to="/buyers" className="hover:text-[#f5c518]">
            Buyers
          </Link>

          <Link to="/dealers" className="hover:text-[#f5c518]">
            Dealers
          </Link>

          <Link to="/contact" className="hover:text-[#f5c518]">
            Contact Us
          </Link>

          <Link
            to="/login"
            className="bg-[#f5c518] text-[#0a0f24] px-4 py-2 rounded-md font-semibold hover:bg-[#d4a314]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
