
export default function NavBar() {
  return (
    <nav style={{padding:"20px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div style={{fontWeight:"bold", fontSize:"20px"}}>CBX2</div>
      <div>
        <a href="/" style={{marginRight:"20px"}}>Home</a>
        <a href="/buyer" style={{marginRight:"20px"}}>Buy</a>
        <a href="/dealer">Dealer</a>
      </div>
    </nav>
  );
}
