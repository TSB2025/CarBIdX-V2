
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function BuyerRequest() {
  const [form, setForm] = useState({year:"",make:"",model:"",trim:"",zip:""});

  const update = (e)=>setForm({...form,[e.target.name]:e.target.value});

  return (
    <>
      <NavBar />
      <div style={{padding:"32px"}}>
        <h2>Create Buyer Request</h2>
        <input name="year" placeholder="Year" onChange={update} /><br/>
        <input name="make" placeholder="Make" onChange={update} /><br/>
        <input name="model" placeholder="Model" onChange={update} /><br/>
        <input name="trim" placeholder="Trim" onChange={update} /><br/>
        <input name="zip" placeholder="ZIP" onChange={update} /><br/>
        <button>Create Request</button>
      </div>
    </>
  );
}
