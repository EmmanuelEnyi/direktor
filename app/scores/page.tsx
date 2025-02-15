"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ScoresPage() {
  const [pairings, setPairings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPairings();
  }, []);

  async function fetchPairings() {
    setLoading(true);
    const { data, error } = await supabase.from("pairings").select("*").eq("round", 1);
    if (error) console.error(error);
    else setPairings(data);
    setLoading(false);
  }

  async function submitScore(matchId: number, playerScore: number, opponentScore: number) {
    const spread = playerScore - opponentScore;

    const { error } = await supabase
      .from("pairings")
      .update({ player_score: playerScore, opponent_score: opponentScore, spread })
      .eq("id", matchId);

    if (error) console.error(error);
    else fetchPairings();
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Enter Scores</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-700 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="border p-2">Board</th>
              <th className="border p-2">Player</th>
              <th className="border p-2">Opponent</th>
              <th className="border p-2">Player Score</th>
              <th className="border p-2">Opponent Score</th>
              <th className="border p-2">Submit</th>
            </tr>
          </thead>
          <tbody>
            {pairings.map((match) => (
              <tr key={match.id} className="text-center">
                <td className="border p-2">{match.board}</td>
                <td className="border p-2">{match.player_name}</td>
                <td className="border p-2">{match.opponent_name}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    min="0"
                    className="bg-gray-800 text-white p-1 w-16"
                    onChange={(e) => (match.player_score = Number(e.target.value))}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    min="0"
                    className="bg-gray-800 text-white p-1 w-16"
                    onChange={(e) => (match.opponent_score = Number(e.target.value))}
                  />
                </td>
                <td className="border p-2">
                  <button
                    onClick={() =>
                      submitScore(match.id, match.player_score || 0, match.opponent_score || 0)
                    }
                    className="bg-lemon-green text-black px-2 py-1 rounded"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
