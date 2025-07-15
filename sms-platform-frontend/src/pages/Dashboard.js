import React from "react";
import SendSMSForm from "../components/SendSMSForm";
import MessageHistory from "../components/MessageHistory";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Tableau de bord SMS</h2>
      <div className="dashboard-section">
        <SendSMSForm />
      </div>
      <div className="dashboard-section">
        <MessageHistory />
      </div>
    </div>
  );
}

export default Dashboard;