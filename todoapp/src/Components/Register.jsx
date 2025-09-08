import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
export default function Register() {

  const[email,setemail]=useState("");
  const[password,setPassword]=useState("");
  const[msg,setMsg]=useState("");


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/register",{
      email,
      password,
    });
    setMsg(res.data.message);
  }
  catch(err){
    setMsg(err.message);
  }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Email">Email</label>
      <input type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <br />
      <label htmlFor="password">Password</label>
      <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <br />
      {/* <NavLink to="/Login"> */}
        {" "}
        <button style={{ border: "2px solid gray " }}>Register</button>
      {/* </NavLink> */}
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}