// Dealer register page
import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

function DealerRegister() {
  const [dealership, setDealership] = useState('');
  const [license, setLicense] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Dealer Registration</h2>

          <Input label="Dealership Name" value={dealership} onChange={(e) => setDealership(e.target.value)} />
          <Input label="Dealer License" value={license} onChange={(e) => setLicense(e.target.value)} />
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <Button label="Register" onClick={() => window.location.href='/dealer/login'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default DealerRegister;