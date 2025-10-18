import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ClearanceRequest.css";

export default function ClearanceRequest() {
  const [formData, setFormData] = useState({
    sapid: "",
    studentName: "",
    registrationNo: "",
    fatherName: "",
    program: "",
    semester: "",
    degreeStatus: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Clearance Request Submitted Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="clearance-page">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Student Portal</h2>
        <nav>
          <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
          <button
            className="active"
            onClick={() => navigate("/clearance-request")}
          >
            📋 Clearance Request
          </button>
          <button onClick={() => navigate("/clearance-status")}>
            ✅ Clearance Status
          </button>
          <button onClick={() => navigate("/messages")}>💬 Messages</button>
          <button onClick={() => navigate("/")}>🚪 Log Out</button>
        </nav>
        <footer>© 2025 Student Portal</footer>
      </aside>

      {/* Main Form Area */}
      <main className="form-area">
        <div className="form-card">
          <h1>Clearance Request Form</h1>
          <p>Please fill out all fields before submitting.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="sapid"
                placeholder="SAP ID"
                value={formData.sapid}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="registrationNo"
                placeholder="Registration Number"
                value={formData.registrationNo}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="program"
                placeholder="Program"
                value={formData.program}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="semester"
                placeholder="Semester"
                value={formData.semester}
                onChange={handleChange}
                required
              />
            </div>

            <div className="radio-section">
              <label>
                <input
                  type="radio"
                  name="degreeStatus"
                  value="Degree Completed"
                  checked={formData.degreeStatus === "Degree Completed"}
                  onChange={handleChange}
                />
                Degree Completed
              </label>
              <label>
                <input
                  type="radio"
                  name="degreeStatus"
                  value="Discontinuing Studies"
                  checked={formData.degreeStatus === "Discontinuing Studies"}
                  onChange={handleChange}
                />
                Discontinuing Studies
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Clearance Request
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
