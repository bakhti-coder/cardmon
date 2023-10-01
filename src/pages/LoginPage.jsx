import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (email === "Bakhtiyor" && password === "1234") {
      navigate("/home");
      localStorage.setItem("login", "true");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="login">
      <div class="box">
        <span class="borderLine"></span>
        <form onSubmit={login}>
          <h2>Login</h2>
          <div class="inputBox">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required="required"
            />
            <span>Username</span>
            <i></i>
          </div>
          <p>Bakhiyor</p>
          <div class="inputBox">
            <input
              defaultValue="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required="required"
            />
            <span>Password</span>
            <i></i>
          </div>
          <input className="mt-5 w-100" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
