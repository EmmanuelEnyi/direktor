"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Papa from "papaparse"; // For CSV export

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ReportsStats() {
  const [standings, setStandings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStandings() {
      const { data, error } = await supabase
        .from("standings")
        .select("name, wins, losses, spread")
        .order("wins", { ascending: false });

      if (error) {
        console.error("Error fetching standings:", error.message);
      } else {
        setStandings(data);
      }
      setLoading(false);
    }

    fetchStandings();
  }, []);

  // Export standings to CSV
  const exportToCSV = () => {
    const csv = Papa.unparse(standings);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tournament_standings.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Reports & Stats</h2>

      {/* Leaderboard */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-xl text-lemon-green mb-4">Leaderboard</h3>
        {loading ? (
          <p className="text-center">Loading standings...</p>
        ) : (
          <table className="w-full text-left border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-2 border-b border-gray-700">#</th>
                <th className="p-2 border-b border-gray-700">Player</th>
                <th className="p-2 border-b border-gray-700">Wins</th>
                <th className="p-2 border-b border-gray-700">Losses</th>
                <th className="p-2 border-b border-gray-700">Spread</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((player, index) => (
                <tr key={player.id} className="hover:bg-gray-700">
                  <td className="p-2 border-b border-gray-700">{index + 1}</td>
                  <td className="p-2 border-b border-gray-700">{player.name}</td>
                  <td className="p-2 border-b border-gray-700">{player.wins}</td>
                  <td className="p-2 border-b border-gray-700">{player.losses}</td>
                  <td className="p-2 border-b border-gray-700">{player.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Export Reports */}
      <div className="text-center">
        <button
          className="bg-lemon-green text-black px-4 py-2 rounded"
          onClick={exportToCSV}
        >
          Export Report (CSV)
        </button>
      </div>
    </div>
  );
}
