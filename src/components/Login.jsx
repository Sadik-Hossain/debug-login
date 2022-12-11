import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   const [token1, setToken] = useState(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      pass,
    };
    try {
      const { data: res } = await axios.post(
        "http://localhost:5000/login",
        data
      );
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.token));
    } catch (error) {
      console.log(error?.response?.statusText);
    }
    /* 
    when uncontrolled input, this works
     e.target.reset();
     */

    // for controlled input, reset like this
    setEmail("");
    setPass("");
    navigate("/");
  };
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ border: "2px solid black", padding: "3rem" }}
      >
        <div style={{ display: "block", marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={{ display: "block" }}>
          <label htmlFor="pass">Pass: &nbsp;</label>
          <input
            type="password"
            autoComplete="true"
            style={{ marginBottom: "1rem" }}
            name="pass"
            placeholder="enter password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            style={{ padding: "0 1rem", display: "block" }}
            value="login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
