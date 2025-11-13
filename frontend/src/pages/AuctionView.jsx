
import NavBar from '../components/NavBar';

export default function AuctionView() {
  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h2>Auction Live</h2>
        <p>Current Lowest Bid: $28,400</p>
        <input placeholder="Enter your bid" /><button>Submit</button>
      </div>
    </>
  );
}
