import React from "react";
import SendSMSForm from "../components/SendSMSForm";
import MessageHistory from "../components/MessageHistory";

function Dashboard() {
  return (
    <div>
      <h2>Tableau de bord SMS</h2>
      <SendSMSForm />
      <MessageHistory />
    </div>
  );
}

export default Dashboard;