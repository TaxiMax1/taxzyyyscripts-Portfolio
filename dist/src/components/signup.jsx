import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import bcrypt from "bcryptjs";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const { data, error } = await supabase.from("forum-users").insert([
        {
          username: username,
          password: hashedPassword, 
          email: email,
          created_at: new Date(),
        },
      ]);

      if (error) {
        setError(error.message);
      } else {
        window.location.href = "http://localhost:5173";
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength="3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            minLength="3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="signup-options">
            <label className="terms-and-conditions">
              <input
                type="checkbox"
                name="agreeToTerms"
                className="custom-checkbox"
                required
              />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="signin">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;