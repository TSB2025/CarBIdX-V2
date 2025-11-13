// Live auction page
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Countdown from '../components/Countdown.jsx';

function AuctionLive() {
  const endTime = new Date(Date.now() + 45 * 60000); 

  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Live Auction</h2>
          <p>Lowest dealer bid wins. Auction ends soon.</p>

          <h3>Time Left:</h3>
          <Countdown endTime={endTime} />

          <div style={{ marginTop: '20px' }}>
            <p>Dealer A: $18,500</p>
            <p>Dealer B: $17,900</p>
            <p>Dealer C: $17,750</p>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default AuctionLive;