// app/signup/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("admin");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      // Optionally, store accountType in your database if needed
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <p className="text-white mb-2">Account Type</p>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setAccountType("admin")}
                className={`flex-1 py-3 rounded border ${
                  accountType === "admin"
                    ? "bg-green-500 text-black"
                    : "bg-gray-700 text-white"
                } hover:ring-2 hover:ring-green-500 transition`}
              >
                Tournament Admin
              </button>
              <button
                type="button"
                onClick={() => setAccountType("player")}
                className={`flex-1 py-3 rounded border ${
                  accountType === "player"
                    ? "bg-green-500 text-black"
                    : "bg-gray-700 text-white"
                } hover:ring-2 hover:ring-green-500 transition`}
              >
                Player
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="form-checkbox mr-2" required />
            <label htmlFor="terms" className="text-white">
              I agree to the Terms &amp; Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-green-500 hover:underline cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
