// pages/login.tsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use Supabase's signInWithPassword method for login
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setMessage("Logged in successfully!");
      setError("");
      // Optionally, redirect the user after successful login
      // For example: router.push('/dashboard')
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: "400px" }}>
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
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3" style={{ backgroundColor: "#ccff00", color: "black" }}>
          Login to your account
        </button>
        {error && <p className="text-danger text-center">{error}</p>}
        {message && <p className="text-success text-center">{message}</p>}
        <p className="text-center">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
