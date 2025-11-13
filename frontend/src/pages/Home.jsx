
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <div style={{textAlign:"center"}}>
        <a href="/buyer"><button>Start Buyer Request</button></a>
      </div>
    </>
  );
}
