// Dealer login page
import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

function DealerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Dealer Login</h2>

          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <Button label="Login" onClick={() => window.location.href='/dealer/dashboard'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default DealerLogin;