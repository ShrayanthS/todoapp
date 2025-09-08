import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
    //   console.log("Token from backend:", res.data.token);
      localStorage.setItem("token", res.data.token);
      setMsg("Login successfull token saved.");
      navigate('/tasks');

    } catch (err) {
      setMsg(err.message);
    }
  };
  return (
    <div style={{border:"2px solid gray"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

      <label htmlFor="Email">Email</label>
      <input type="text" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <br />
      <label htmlFor="password">Password</label>
      <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <br />
      <button style={{ border: "2px solid gray " }}>Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}