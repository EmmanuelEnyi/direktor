"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PlayersListPage() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    setLoading(true);
    const { data, error } = await supabase.from("players").select("*").order("name");

    if (error) {
      console.error("Error fetching players:", error);
    } else {
      setPlayers(data);
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Registered Players</h2>
      {loading ? <p className="text-center">Loading...</p> : null}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse border border-black text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Club</th>
              <th className="border p-2">Player ID</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="text-center">
                <td className="border p-2">{player.name}</td>
                <td className="border p-2">{player.rating || "N/A"}</td>
                <td className="border p-2">{player.club || "N/A"}</td>
                <td className="border p-2">{player.player_id || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
