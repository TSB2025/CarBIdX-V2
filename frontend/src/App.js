import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyerRequest from './pages/BuyerRequest';
import DealerLogin from './pages/DealerLogin';
import AuctionView from './pages/AuctionView';
export default function App(){return(<BrowserRouter><Routes><Route path='/' element={<Home/>}/><Route path='/buyer' element={<BuyerRequest/>}/><Route path='/dealer' element={<DealerLogin/>}/><Route path='/auction' element={<AuctionView/>}/></Routes></BrowserRouter>)}