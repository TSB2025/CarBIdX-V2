// React Router configuration
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Loading...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;