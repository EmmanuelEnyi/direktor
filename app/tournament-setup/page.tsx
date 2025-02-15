"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function TournamentSetup() {
  const router = useRouter();

  const [tournamentName, setTournamentName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("Swiss");
  const [rounds, setRounds] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to submit the tournament details
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { data, error } = await supabase.from("tournaments").insert([
      {
        name: tournamentName,
        location,
        date,
        format,
        rounds,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      alert("Error creating tournament: " + error.message);
    } else {
      alert("Tournament created successfully!");
      router.push("/dashboard"); // Redirect to dashboard after setup
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-lemon-green mb-6">
        Create a New Tournament
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <span className="text-white">Tournament Name:</span>
          <input
            type="text"
            required
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Location:</span>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Date:</span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Tournament Format:</span>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
          >
            <option value="Swiss">Swiss</option>
            <option value="Round Robin">Round Robin</option>
            <option value="King of the Hill">King of the Hill</option>
            <option value="Quartile">Quartile</option>
            <option value="Random">Random</option>
            <option value="Manual">Manual</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-white">Number of Rounds:</span>
          <input
            type="number"
            min="1"
            required
            value={rounds}
            onChange={(e) => setRounds(Number(e.target.value))}
            className="mt-2 block w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-lemon-green text-black font-bold rounded hover:bg-green-500 transition"
        >
          {isSubmitting ? "Creating..." : "Create Tournament"}
        </button>
      </form>
    </div>
  );
}
