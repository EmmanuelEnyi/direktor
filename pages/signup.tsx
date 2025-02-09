// pages/signup.tsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use Supabase's signUp method for account creation
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setMessage("Signup successful! Please check your email for confirmation.");
      setError("");
      // Optionally, redirect or update the UI as needed
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSignup} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Type</label>
          <div className="btn-group w-100" role="group">
            <input type="radio" className="btn-check" name="accountType" id="admin" autoComplete="off" defaultChecked />
            <label className="btn btn-outline-primary w-50" htmlFor="admin">Tournament Admin</label>
            <input type="radio" className="btn-check" name="accountType" id="player" autoComplete="off" />
            <label className="btn btn-outline-primary w-50" htmlFor="player">Player</label>
          </div>
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="terms" required />
          <label className="form-check-label" htmlFor="terms">I agree to the Terms & Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3" style={{ backgroundColor: "#ccff00", color: "black" }}>
          Create Account
        </button>
        {error && <p className="text-danger text-center">{error}</p>}
        {message && <p className="text-success text-center">{message}</p>}
        <p className="text-center">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
