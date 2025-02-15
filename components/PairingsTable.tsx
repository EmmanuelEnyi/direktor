import { useState } from "react";

export default function PairingsTable({ pairings, players, onPairingChange }) {
  const [editingMatch, setEditingMatch] = useState(null);

  return (
    <table className="w-full border-collapse border border-gray-700 text-white">
      <thead>
        <tr className="bg-gray-800">
          <th className="border p-2">Board</th>
          <th className="border p-2">Player 1</th>
          <th className="border p-2">Opponent</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {pairings.map((match) => (
          <tr key={match.id} className="text-center">
            <td className="border p-2">{match.board}</td>
            <td className="border p-2">{match.player_name}</td>
            <td className="border p-2">
              {editingMatch === match.id ? (
                <select
                  defaultValue={match.opponent_id}
                  onChange={(e) => onPairingChange(match.id, Number(e.target.value))}
                  className="bg-gray-800 text-white px-2 py-1 rounded"
                >
                  {players.map((player) => (
                    <option key={player.id} value={player.id}>
                      {player.name}
                    </option>
                  ))}
                </select>
              ) : (
                match.opponent_name
              )}
            </td>
            <td className="border p-2">
              <button
                className="bg-lemon-green text-black px-2 py-1 rounded"
                onClick={() => setEditingMatch(match.id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
