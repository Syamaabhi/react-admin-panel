import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ){
      localStorage.setItem("auth","true");
      navigate("/admin/dashboard");
    }else{
      alert("Invalid login");
    }
  };

  return (
    <div>

      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>

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

        <button type="submit">Login</button>

      </form>

      <p>
        Don't have account? <Link to="/signup">Signup</Link>
      </p>

    </div>
  );
}

export default Login;