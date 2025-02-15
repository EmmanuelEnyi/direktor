"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ExportReportPage() {
  const [standings, setStandings] = useState<any[]>([]);

  useEffect(() => {
    fetchStandings();
  }, []);

  async function fetchStandings() {
    const { data, error } = await supabase.from("standings").select("*");
    if (error) console.error(error);
    else setStandings(data);
  }

  function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(standings));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "tournament_results.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  function exportCSV() {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Wins,Losses,Spread"]
        .concat(standings.map((p) => `${p.name},${p.wins},${p.losses},${p.spread}`))
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tournament_results.csv");
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Export Reports</h2>
      <button onClick={exportJSON} className="bg-lemon-green text-black px-4 py-2 rounded mr-4">
        Export JSON
      </button>
      <button onClick={exportCSV} className="bg-lemon-green text-black px-4 py-2 rounded">
        Export CSV
      </button>
    </div>
  );
}
