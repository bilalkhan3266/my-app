import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClearanceStatus.css";

export default function ClearanceStatus() {
  const navigate = useNavigate();

  const clearanceData = [
    { department: "Library", status: "Cleared" },
    { department: "Fee & Dues", status: "Pending" },
    { department: "Student Services Department", status: "Cleared" },
    { department: "Laboratory (if required)", status: "Pending" },
    { department: "Coordination Office", status: "Cleared" },
    { department: "Transport", status: "Not Applicable" },
    { department: "Hostel Mess", status: "Cleared" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Cleared":
        return "status cleared";
      case "Pending":
        return "status pending";
      case "Not Applicable":
        return "status na";
      default:
        return "status";
    }
  };

  return (
    <div className="clearance-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Student Portal</h2>
        <nav>
          <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
          <button onClick={() => navigate("/clearance-request")}>📋 Clearance Request</button>
          <button className="active">✅ Clearance Status</button>
          <button onClick={() => navigate("/messages")}>💬 Messages</button>
          <button onClick={() => navigate("/")}>🚪 Log Out</button>
        </nav>
        <footer>© 2025 Student Portal</footer>
      </aside>

      {/* Main Content */}
      <main className="form-area">
        <div className="form-card">
          <h1>Clearance Status</h1>
          <p>Check your clearance progress from all concerned departments below.</p>

          <table className="status-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {clearanceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.department}</td>
                  <td>
                    <span className={getStatusClass(item.status)}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="status-summary">
            <p>
              <strong>Note:</strong> Please ensure all departments mark your record as
              <span className="cleared-text"> "Cleared" </span> before final approval.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
