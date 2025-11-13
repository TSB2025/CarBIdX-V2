// Buyer request page
import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Input from '../components/Input.jsx';
import Select from '../components/Select.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

function Request() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const [zip, setZip] = useState('');

  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Buyer Request</h2>

          <Input label="ZIP Code" value={zip} onChange={(e) => setZip(e.target.value)} />

          <Input label="Year" value={year} onChange={(e) => setYear(e.target.value)} />
          <Input label="Make" value={make} onChange={(e) => setMake(e.target.value)} />
          <Input label="Model" value={model} onChange={(e) => setModel(e.target.value)} />
          <Input label="Trim" value={trim} onChange={(e) => setTrim(e.target.value)} />

          <Button label="Continue" onClick={() => window.location.href='/verify'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Request;