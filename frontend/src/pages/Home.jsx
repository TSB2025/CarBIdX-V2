// Home page
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Find Your Next Car</h2>
          <p>Submit your request and let verified dealers compete.</p>
          <Button label="Start Request" onClick={() => window.location.href='/request'} />
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Home;