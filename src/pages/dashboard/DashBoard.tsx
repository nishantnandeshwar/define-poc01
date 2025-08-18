import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";


interface OutletContextType {
  onLogout?: () => void;
  token?: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { onLogout, token } = useOutletContext<OutletContextType>();

  const handleLogout = () => {
    onLogout?.();
    navigate("/", { replace: true });
  };

  const handleMembership = () => {
    navigate("/membership-directory");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p>You are logged in {token ? "✅" : ""}.</p>

        <div className="dashboard-buttons">
          <button className="btn btn-membership" onClick={handleMembership}>
            Membership Directory
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
