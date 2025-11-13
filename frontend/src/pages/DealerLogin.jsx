
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { API } from '../services/api';

export default function DealerLogin() {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [msg,setMsg]=useState("");

  const login = async()=> {
    const r = await API.post("/auth/login", {email, password:pass});
    setMsg("Login attempt complete.");
  };

  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h2>Dealer Login</h2>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
        <input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)} /><br/>
        <button onClick={login}>Login</button>
        <p>{msg}</p>
      </div>
    </>
  );
}
