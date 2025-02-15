import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-lemon-green">
          Tournament Dashboard
        </h2>

        {/* Dashboard Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tournament Setup */}
          <Link href="/tournament-setup">
            <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer">
              <div className="flex justify-center mb-4">
                <span className="material-icons text-5xl text-lemon-green">
                  event
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Tournament Setup
              </h3>
              <p className="text-center text-sm mt-2 text-gray-300">
                Create and manage tournaments.
              </p>
            </div>
          </Link>

          {/* Pairings & Scores */}
          <Link href="/pairings-scores">
            <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer">
              <div className="flex justify-center mb-4">
                <span className="material-icons text-5xl text-lemon-green">
                  leaderboard
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Pairings & Scores
              </h3>
              <p className="text-center text-sm mt-2 text-gray-300">
                Generate pairings and submit results.
              </p>
            </div>
          </Link>

          {/* Reports & Stats */}
          <Link href="/reports-stats">
            <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer">
              <div className="flex justify-center mb-4">
                <span className="material-icons text-5xl text-lemon-green">
                  assessment
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Reports & Stats
              </h3>
              <p className="text-center text-sm mt-2 text-gray-300">
                View tournament insights and statistics.
              </p>
            </div>
          </Link>

          {/* Player Result Submission */}
          <Link href="/player-result-submission">
            <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer">
              <div className="flex justify-center mb-4">
                <span className="material-icons text-5xl text-lemon-green">
                  assignment
                </span>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Submit Results
              </h3>
              <p className="text-center text-sm mt-2 text-gray-300">
                Enter and verify match outcomes.
              </p>
            </div>
          </Link>
        </div>

        {/* Player Management Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-lemon-green">
            Player Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Register Player */}
            <Link href="/players/register">
              <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer text-center">
                <h4 className="text-xl font-semibold text-lemon-green">
                  Register Player
                </h4>
                <p className="text-lg mt-2 text-gray-300">
                  Add new players to the system.
                </p>
              </div>
            </Link>

            {/* View Registered Players */}
            <Link href="/players/list">
              <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer text-center">
                <h4 className="text-xl font-semibold text-lemon-green">
                  View Players
                </h4>
                <p className="text-lg mt-2 text-gray-300">
                  See all registered players.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Tournament Management Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-lemon-green">
            Manage Tournaments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Active Tournaments */}
            <Link href="/active-tournaments">
              <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer text-center">
                <h4 className="text-xl font-semibold text-lemon-green">
                  Active Tournaments
                </h4>
                <p className="text-lg mt-2 text-gray-300">5 Ongoing</p>
              </div>
            </Link>

            {/* Completed Tournaments */}
            <Link href="/completed-tournaments">
              <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer text-center">
                <h4 className="text-xl font-semibold text-lemon-green">
                  Completed Tournaments
                </h4>
                <p className="text-lg mt-2 text-gray-300">12 Finished</p>
              </div>
            </Link>

            {/* Upcoming Tournaments */}
            <Link href="/upcoming-tournaments">
              <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all rounded-lg p-6 cursor-pointer text-center">
                <h4 className="text-xl font-semibold text-lemon-green">
                  Upcoming Tournaments
                </h4>
                <p className="text-lg mt-2 text-gray-300">3 Scheduled</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-lemon-green">
            Tournament Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 shadow-sm">
              <h4 className="text-xl font-bold">Active Tournaments</h4>
              <p className="text-lg">5</p>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 shadow-sm">
              <h4 className="text-xl font-bold">Total Players</h4>
              <p className="text-lg">120</p>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 shadow-sm">
              <h4 className="text-xl font-bold">Recent Matches</h4>
              <p className="text-lg">30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 border-t border-gray-700 mt-12">
        <small>© 2025 Direktor Tournament Manager. All rights reserved.</small>
      </footer>
    </div>
  );
}
