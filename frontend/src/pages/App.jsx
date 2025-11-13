
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BuyerRequest from './BuyerRequest';
import DealerLogin from './DealerLogin';
import AuctionView from './AuctionView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<BuyerRequest />} />
        <Route path="/dealer" element={<DealerLogin />} />
        <Route path="/auction" element={<AuctionView />} />
      </Routes>
    </BrowserRouter>
  );
}
