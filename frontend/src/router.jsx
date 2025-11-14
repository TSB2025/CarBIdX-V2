import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">CBX2 Frontend Active</h1>
    </div>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
