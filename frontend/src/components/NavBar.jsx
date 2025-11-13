
export default function NavBar() {
  return (
    <nav style={{padding:"16px", borderBottom:"1px solid #ddd", display:"flex", justifyContent:"space-between"}}>
      <div style={{fontWeight:"bold"}}>CarBidX-V2</div>
      <div>
        <a href="/" style={{marginRight:"16px"}}>Home</a>
        <a href="/buyer" style={{marginRight:"16px"}}>Buy</a>
        <a href="/dealer">Dealer</a>
      </div>
    </nav>
  );
}
