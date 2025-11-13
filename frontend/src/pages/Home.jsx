
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h1>Find Your Next Car With Live Dealer Bidding</h1>
        <p>Enter your request and watch dealers compete in real time.</p>
        <a href="/buyer"><button>Start Request</button></a>
      </div>
    </>
  );
}
