import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="login_wrapper">
      <form onSubmit={handleSubmit} className="input_form">
        <h2>Good to see you again!!</h2>
        <div className="input_form_group">
          <label htmlFor="email">Username or Email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g. example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input_form_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign_in_btn">
          Sign in
        </button>
        <div className="login-links">
          <Link to="/register" className="link">
            Don't have an account?
          </Link>
          <Link to="/forgot-password" className="link">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
