import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Messages.css";

export default function Messages() {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState("Library");
  const [messages, setMessages] = useState({
    Library: ["📚 Welcome to the Library Department!"],
    "Fee & Dues": ["💰 Hello! How can we assist you with your dues?"],
    "Student Services": ["🎓 Welcome to Student Services!"],
    Laboratory: ["🔬 Lab clearance queries here."],
    Coordination: ["📋 Hello from Coordination Office."],
    Transport: ["🚌 Welcome to Transport Department!"],
    Hostel: ["🍽️ Hostel Mess Department ready to help!"],
  });
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages({
        ...messages,
        [selectedDept]: [...messages[selectedDept], `You: ${newMessage}`],
      });
      setNewMessage("");
    }
  };

  return (
    <div className="messages-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Student Portal</h2>
        <nav>
          <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
          <button onClick={() => navigate("/clearance-request")}>📋 Clearance Request</button>
          <button onClick={() => navigate("/clearance-status")}>✅ Clearance Status</button>
          <button className="active">💬 Messages</button>
          <button onClick={() => navigate("/")}>🚪 Log Out</button>
        </nav>
        <footer>© 2025 Student Portal</footer>
      </aside>

      {/* Chat Area */}
      <main className="chat-area">
        <div className="chat-card">
          <h1>Messages</h1>
          <p>Select a department and start chatting below.</p>

          <div className="chat-container">
            {/* Department List */}
            <aside className="departments-list">
              <h3>Departments</h3>
              {Object.keys(messages).map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={selectedDept === dept ? "active" : ""}
                >
                  {dept}
                </button>
              ))}
            </aside>

            {/* Chat Box */}
            <div className="chat-window">
              <h2>{selectedDept}</h2>
              <div className="chat-box">
                {messages[selectedDept].map((msg, index) => (
                  <p
                    key={index}
                    className={msg.startsWith("You:") ? "user-msg" : "dept-msg"}
                  >
                    {msg}
                  </p>
                ))}
              </div>

              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
