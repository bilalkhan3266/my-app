import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="student-info">
          <h2>Bilal</h2>
          <p>Riphah International University</p>
          <p>Computer Science</p>
        </div>

    <nav>
  <button className="active">🏠 Dashboard</button>
  <button onClick={() => navigate("/clearance-request")}>📋 Clearance Request</button>
  <button onClick={() => navigate("/clearance-status")}>✅ Clearance Status</button>
  <button onClick={() => navigate("/messages")}>💬 Messages</button>
  <button onClick={() => navigate("/")}>🚪 Log Out</button>
</nav>


        <footer>© 2025 Student Portal</footer>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome To Riphah University!</h1>
          <p>Here's your student dashboard with all your academic information.</p>
        </header>

        <section className="program-details">
          <h2>Program Details</h2>
          <div className="details-grid">
            <div>
              <strong>Registration Number</strong>
              <p>21-NTU-CS-1362</p>
            </div>
            <div>
              <strong>Department</strong>
              <p>Computer Science</p>
            </div>
            <div>
              <strong>Batch</strong>
              <p>21-25</p>
            </div>
            <div>
              <strong>Specialization</strong>
              <p>Software Engineering</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="dashboard-buttons">
            <button
              className="request-btn"
              onClick={() => navigate("/clearance-request")}
            >
              Submit Clearance Request
            </button>

            <button
              className="clearance-btn"
              onClick={() => navigate("/clearance-status")}
            >
              Check Clearance Status
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
