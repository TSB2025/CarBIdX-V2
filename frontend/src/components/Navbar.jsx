import { Link } from "react-router-dom";
import "./../styles/layout.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">CarBidX V2</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/buyer/request">Buyers</Link></li>
        <li><Link to="/dealer/login">Dealers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
