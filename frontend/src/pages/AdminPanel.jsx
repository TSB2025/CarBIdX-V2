// Admin panel page
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';

function AdminPanel() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card>
          <h2>Admin Panel</h2>
          <p>Manage dealers, users, and deposit settings.</p>

          <ul>
            <li>Approve Dealers</li>
            <li>Suspend Users</li>
            <li>Toggle Deposit System</li>
            <li>View Auctions</li>
          </ul>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default AdminPanel;