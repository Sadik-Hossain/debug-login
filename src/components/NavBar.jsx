import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const some = localStorage.getItem("token");
    console.log(some);
    if (some) {
      setloggedIn(true);
    }
    console.log(some);
  }, [loggedIn]);

  const logout = () => {
    localStorage.removeItem("token");
    setloggedIn(!loggedIn);
    navigate("/login");
  };
  return (
    <nav style={{ padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        {!loggedIn ? (
          <Link
            to="/login"
            style={{
              fontSize: "1.2rem",
              textDecoration: "none",
              color: "#000",
            }}
          >
            Login
          </Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
