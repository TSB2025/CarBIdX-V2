
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function AuctionView() {
  const [lowest,setLowest]=useState(28400);
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
        <input placeholder="Your bid" onChange={e=>setMyBid(e.target.value)} />
        <button onClick={submitBid}>Submit Bid</button>
      </div>
    </>
  );
}
