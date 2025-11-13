import React from "react";
import { Routes, Route } from "react-router-dom";

// Placeholder pages (real pages come in F-PAGES)
import HomePage from "../pages/HomePage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

