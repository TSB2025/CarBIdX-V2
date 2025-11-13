
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function AuctionView() {
  const [lowest,setLowest]=useState(28000);
  const [myBid,setMyBid]=useState("");

  const submitBid = ()=> {
    setLowest(myBid < lowest ? myBid : lowest);
  };

  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h2>Live Auction</h2>
        <p>Lowest Bid: ${lowest}</p>
        <input onChange={e=>setMyBid(e.target.value)} placeholder="Your bid" />
        <button onClick={submitBid}>Submit</button>
      </div>
    </>
  );
}
