"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPlayerPage() {
  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!playerName || !email) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/players/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: playerName, email, rating }),
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage("Error: " + result.error);
      } else {
        setMessage("Player registered successfully!");
        setPlayerName("");
        setEmail("");
        setRating("");
      }
    } catch (error) {
      setMessage("Failed to connect to the server.");
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-lemon-green">
          Register Player
        </h2>
        {message && (
          <p className="text-center text-sm mt-2 text-lemon-green">{message}</p>
        )}
        <form onSubmit={handleRegister} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-300">Player Name</label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Rating (Optional)</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lemon-green text-black py-2 rounded mt-4 font-bold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
