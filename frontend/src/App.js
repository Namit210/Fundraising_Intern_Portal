import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const bgGradient = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: 'Segoe UI, sans-serif',
};

function DummyLogin({ onLogin }) {
  return (
    <div style={{ ...bgGradient }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: 40,
        minWidth: 340,
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: 24, color: "#3730a3" }}>Fundraising Intern Portal</h1>
        <h2 style={{ marginBottom: 32, color: "#6366f1" }}>Intern Login</h2>
        <button
          onClick={onLogin}
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
            marginBottom: 16
          }}
        >
          Login (Dummy)
        </button>
        <p style={{ color: "#a1a1aa", fontSize: 14 }}>No authentication required</p>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginBottom: 32
    }}>
      <Link to="/" style={{
        textDecoration: "none",
        color: "#6366f1",
        fontWeight: 600,
        fontSize: 18,
        padding: "8px 18px",
        borderRadius: 8,
        background: "#eef2ff"
      }}>Dashboard</Link>
      <Link to="/leaderboard" style={{
        textDecoration: "none",
        color: "#6366f1",
        fontWeight: 600,
        fontSize: 18,
        padding: "8px 18px",
        borderRadius: 8,
        background: "#eef2ff"
      }}>Leaderboard</Link>
    </nav>
  );
}

function Dashboard({ user }) {
  return (
    <div style={bgGradient}>
      <div style={{
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: 40,
        minWidth: 380,
        maxWidth: 420,
        textAlign: "center"
      }}>
        <NavBar />
        <h1 style={{ color: "#3730a3", marginBottom: 8 }}>Welcome, {user.name}</h1>
        <div style={{ margin: "18px 0 28px 0" }}>
          <span style={{
            background: "#eef2ff",
            color: "#6366f1",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: 1
          }}>
            Referral Code: {user.referralCode}
          </span>
        </div>
        <div style={{
          background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
          color: "#fff",
          borderRadius: 10,
          padding: "18px 0",
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 32,
          boxShadow: "0 2px 8px rgba(99,102,241,0.10)"
        }}>
          Total Donations Raised: ₹{user.totalDonations}
        </div>
        <h2 style={{ color: "#6366f1", marginBottom: 16 }}>Rewards & Unlockables</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {user.rewards.map((reward, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: reward.unlocked ? "#d1fae5" : "#f3f4f6",
              color: reward.unlocked ? "#059669" : "#6b7280",
              borderRadius: 8,
              padding: "10px 18px",
              fontWeight: 500,
              fontSize: 17,
              boxShadow: reward.unlocked ? "0 2px 8px rgba(16,185,129,0.10)" : "none"
            }}>
              <span>{reward.title}</span>
              <span style={{ fontSize: 22 }}>{reward.unlocked ? "✅" : "🔒"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Leaderboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={bgGradient}>
      <div style={{
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: 40,
        minWidth: 380,
        maxWidth: 480,
        textAlign: "center"
      }}>
        <NavBar />
        <h1 style={{ color: "#3730a3", marginBottom: 24 }}>Leaderboard</h1>
        {!data ? (
          <div>Loading...</div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
            <thead>
              <tr style={{ background: "#eef2ff", color: "#6366f1" }}>
                <th style={{ padding: 10, borderRadius: 6, textAlign: "left" }}>#</th>
                <th style={{ padding: 10, borderRadius: 6, textAlign: "left" }}>Name</th>
                <th style={{ padding: 10, borderRadius: 6, textAlign: "left" }}>Referral</th>
                <th style={{ padding: 10, borderRadius: 6, textAlign: "right" }}>Donations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={row.referralCode} style={{ background: idx % 2 === 0 ? "#f3f4f6" : "#fff" }}>
                  <td style={{ padding: 10 }}>{idx + 1}</td>
                  <td style={{ padding: 10 }}>{row.name}</td>
                  <td style={{ padding: 10 }}>{row.referralCode}</td>
                  <td style={{ padding: 10, textAlign: "right", fontWeight: 600, color: "#6366f1" }}>₹{row.totalDonations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      fetch("http://localhost:5000/api/user")
        .then(res => res.json())
        .then(setUser);
    }
  }, [loggedIn]);

  if (!loggedIn) return <DummyLogin onLogin={() => setLoggedIn(true)} />;
  if (!user) return <div style={bgGradient}><div>Loading...</div></div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
