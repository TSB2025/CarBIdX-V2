// Buyer verification page
import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

function Verify() {
  const [otp, setOtp] = useState('');

  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Verify Your Email</h2>
          <p>Enter the 6-digit code sent to your email.</p>

          <Input label="Verification Code" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <Button label="Verify" onClick={() => window.location.href='/auction/1'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Verify;