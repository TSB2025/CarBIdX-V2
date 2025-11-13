// Buyer confirm winning dealer
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

function Confirm() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Confirm Your Winner</h2>
          <p>The lowest bid is $17,750. Confirm this dealer to finalize your match.</p>

          <Button label="Confirm Dealer" type="gold" onClick={() => alert('Confirmed')} />
          <Button label="Reject" type="primary" onClick={() => alert('Rejected')} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Confirm;