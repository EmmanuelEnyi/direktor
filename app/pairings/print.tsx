"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PrintPairingsPage() {
  const [pairings, setPairings] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPairings() {
      const { data, error } = await supabase.from("pairings").select("*");
      if (error) console.error(error);
      else setPairings(data);
    }
    fetchPairings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Pairings</h2>
      <button onClick={() => window.print()} className="bg-lemon-green px-4 py-2 rounded">
        Print
      </button>
      <table className="mt-4 w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="border p-2">Board</th>
            <th className="border p-2">Player</th>
            <th className="border p-2">Opponent</th>
          </tr>
        </thead>
        <tbody>
          {pairings.map((match) => (
            <tr key={match.id}>
              <td className="border p-2">{match.board}</td>
              <td className="border p-2">{match.player_name}</td>
              <td className="border p-2">{match.opponent_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
