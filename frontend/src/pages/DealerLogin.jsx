
import NavBar from '../components/NavBar';

export default function DealerLogin() {
  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h2>Dealer Login</h2>
        <input placeholder="Email" /><br/>
        <input placeholder="Password" type="password" /><br/>
        <button>Login</button>
      </div>
    </>
  );
}
