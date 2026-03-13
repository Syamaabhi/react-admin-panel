import React from "react";

function Dashboard() {

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <p>Welcome Admin</p>

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default Dashboard;