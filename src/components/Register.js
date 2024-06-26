import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Create your account</h2>
        <div className="input_form_group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input_form_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g. example@abc.com"
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
          Sign up
        </button>
        <div className="register-links">
          <Link to="/login" className="link">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
