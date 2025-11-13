// Dealer dashboard
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

function DealerDashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Dealer Dashboard</h2>
          <p>View live auctions and submit bids.</p>

          <Button label="View Auctions" onClick={() => window.location.href='/auction/1'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default DealerDashboard;