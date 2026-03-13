import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {username,password};

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful");
    navigate("/");
  };

  return (
    <div>
      <h2>Admin Signup</h2>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Sign Up</button>

      </form>

    </div>
  );
}

export default Signup;