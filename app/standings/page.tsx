"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StandingsPage() {
  const [standings, setStandings] = useState<any[]>([]);

  useEffect(() => {
    fetchStandings();
  }, []);

  async function fetchStandings() {
    const { data, error } = await supabase
      .from("standings")
      .select("*")
      .order("wins", { ascending: false });

    if (error) console.error(error);
    else setStandings(data);
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Tournament Standings</h2>
      <table className="w-full border-collapse border border-gray-700 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="border p-2">Rank</th>
            <th className="border p-2">Player</th>
            <th className="border p-2">Wins</th>
            <th className="border p-2">Losses</th>
            <th className="border p-2">Spread</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((player, index) => (
            <tr key={player.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{player.name}</td>
              <td className="border p-2">{player.wins}</td>
              <td className="border p-2">{player.losses}</td>
              <td className="border p-2">{player.spread}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
