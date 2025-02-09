// pages/dashboard.tsx
import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      {/* Header Section */}
      <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h1 className="h3 m-0">Direktor Tournament Manager</h1>
        {/* For example, a settings button */}
        <Link href="/settings">
          <button className="btn btn-outline-light">Settings</button>
        </Link>
      </header>

      {/* Main Dashboard Content */}
      <main className="container py-4">
        <section className="mb-5">
          <h2 className="mb-4 text-center">Dashboard</h2>
          <div className="row g-4">
            {/* Tournament Setup Card */}
            <div className="col-md-3">
              <Link href="/tournament-setup">
                <div className="card bg-warning bg-opacity-50 text-dark text-center p-3 shadow-sm rounded">
                  <div className="card-body">
                    <i className="material-icons" style={{ fontSize: "48px" }}>event</i>
                    <h5 className="card-title mt-3">Tournament Setup</h5>
                    <p className="card-text">Create and manage tournaments</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Pairings & Scores Card */}
            <div className="col-md-3">
              <Link href="/pairings-scores">
                <div className="card bg-warning bg-opacity-50 text-dark text-center p-3 shadow-sm rounded">
                  <div className="card-body">
                    <i className="material-icons" style={{ fontSize: "48px" }}>leaderboard</i>
                    <h5 className="card-title mt-3">Pairings & Scores</h5>
                    <p className="card-text">Update match results</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Reports & Stats Card */}
            <div className="col-md-3">
              <Link href="/reports-stats">
                <div className="card bg-warning bg-opacity-50 text-dark text-center p-3 shadow-sm rounded">
                  <div className="card-body">
                    <i className="material-icons" style={{ fontSize: "48px" }}>assessment</i>
                    <h5 className="card-title mt-3">Reports & Stats</h5>
                    <p className="card-text">View tournament insights</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Submit Results Card */}
            <div className="col-md-3">
              <Link href="/player-result-submission">
                <div className="card bg-warning bg-opacity-50 text-dark text-center p-3 shadow-sm rounded">
                  <div className="card-body">
                    <i className="material-icons" style={{ fontSize: "48px" }}>assignment</i>
                    <h5 className="card-title mt-3">Submit Results</h5>
                    <p className="card-text">Enter match outcomes</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-5">
          <h2 className="mb-4 text-center">Statistics</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-warning bg-opacity-50 text-dark p-3 shadow-sm rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Active Tournaments</h3>
                  <p className="card-text">5</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-warning bg-opacity-50 text-dark p-3 shadow-sm rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Total Players</h3>
                  <p className="card-text">120</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-warning bg-opacity-50 text-dark p-3 shadow-sm rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Recent Matches</h3>
                  <p className="card-text">30</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="text-center p-3 border-top">
        <small>© 2025 Direktor Tournament Manager. All rights reserved.</small>
      </footer>
    </div>
  );
}
