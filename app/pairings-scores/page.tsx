"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PairingsScores() {
  const [pairings, setPairings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [round, setRound] = useState<number | null>(null);

  // Fetch pairings from Supabase
  useEffect(() => {
    async function fetchPairings() {
      const { data, error } = await supabase.from("pairings").select("*");

      if (error) {
        console.error("Error fetching pairings:", error.message);
      } else {
        setPairings(data);
      }
      setLoading(false);
    }

    fetchPairings();
  }, []);

  // Function to insert a new pairing
  async function addPairing() {
    if (!player1 || !player2 || round === null) {
      alert("Please fill in all fields.");
      return;
    }

    const { data, error } = await supabase
      .from("pairings")
      .insert([
        { player1, player2, round, player1_score: 0, player2_score: 0 }
      ]);

    if (error) {
      console.error("Error inserting pairing:", error.message);
    } else {
      alert("Pairing added successfully!");
      setPairings([...pairings, data[0]]); // Update local state
    }
  }

  // Function to submit match scores
  async function submitScore(pairingId: number, player1Score: number, player2Score: number) {
    const { error } = await supabase
      .from("pairings")
      .update({ player1_score: player1Score, player2_score: player2Score })
      .eq("id", pairingId);

    if (error) {
      console.error("Error updating score:", error.message);
    } else {
      alert("Score updated successfully!");
      setPairings(pairings.map(pairing => pairing.id === pairingId 
        ? { ...pairing, player1_score: player1Score, player2_score: player2Score } 
        : pairing));
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Pairings & Scores</h2>

      {/* Add Pairing Section */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-xl text-lemon-green mb-4">Add a New Pairing</h3>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Player 1 Name"
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player 2 Name"
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <input
            type="number"
            placeholder="Round"
            className="bg-gray-700 text-white p-2 rounded w-24"
            value={round ?? ""}
            onChange={(e) => setRound(Number(e.target.value))}
          />
          <button
            onClick={addPairing}
            className="bg-lemon-green text-black px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* Display Pairings */}
      {loading ? (
        <p className="text-center">Loading pairings...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairings.map((pairing) => (
            <div key={pairing.id} className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-xl text-lemon-green text-center">
                {pairing.player1} vs {pairing.player2} (Round {pairing.round})
              </h3>
              <div className="flex justify-center mt-4">
                <input
                  type="number"
                  placeholder="Player 1 Score"
                  className="bg-gray-700 text-white p-2 rounded w-24 mx-2"
                  defaultValue={pairing.player1_score}
                  onChange={(e) => (pairing.player1_score = Number(e.target.value))}
                />
                <input
                  type="number"
                  placeholder="Player 2 Score"
                  className="bg-gray-700 text-white p-2 rounded w-24 mx-2"
                  defaultValue={pairing.player2_score}
                  onChange={(e) => (pairing.player2_score = Number(e.target.value))}
                />
              </div>
              <button
                onClick={() => submitScore(pairing.id, pairing.player1_score, pairing.player2_score)}
                className="block mx-auto mt-4 bg-lemon-green text-black px-4 py-2 rounded"
              >
                Submit Score
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
