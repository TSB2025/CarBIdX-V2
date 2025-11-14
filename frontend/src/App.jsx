import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0f24] text-white">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
