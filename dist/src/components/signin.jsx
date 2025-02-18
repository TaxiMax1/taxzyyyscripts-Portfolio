import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { supabase } from "./supabaseClient";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data, error: supaError } = await supabase
        .from("forum-users")
        .select("*")
        .eq("username", username)
        .single(); 

      if (supaError) {
        if (supaError.message.includes("multiple (or no) rows returned")) {
          setError("Invalid username or password");
        } else {
          setError(supaError.message);
        }
      } else {
        const hashedPassword = data.password;  
        const match = await bcrypt.compare(password, hashedPassword);
        
        if (!match) {
          setError("Invalid username or password");
        } else {
          window.location.href = "http://localhost:5173";
          setUsername("");
          setPassword("");
        }
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            minLength="3"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" className="custom-checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit">Sign In</button>

          {error && <p style={{ color: "red", fontSize: ".9rem" }}>{error}</p>}
        </form>

        <p className="register-link">
          Don't have an account? <a href="signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;