import React from "react";
import "../Css/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back 🌿</h2>
        <p className="login-subtitle">Please login to continue</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email"  />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"  />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
