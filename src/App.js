import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ClearanceRequest from "./components/ClearanceRequest";
import ClearanceStatus from "./components/ClearanceStatus";
import Messages from "./components/Messages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clearance-request" element={<ClearanceRequest />} />
        <Route path="/clearance-status" element={<ClearanceStatus />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
