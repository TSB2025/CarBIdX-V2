import React,{useState,useEffect} from 'react';
export default function CountdownTimer({seconds}){
 const[s,setS]=useState(seconds);
 useEffect(()=>{const t=setInterval(()=>{s>0&&setS(s-1)},1000);return()=>clearInterval(t)},[s]);
 return(<div>{s}</div>);
}