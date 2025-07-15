import React, { useEffect, useState } from "react";
import axios from "axios";

function MessageHistory() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history").then((res) => {
      setMessages(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Historique des messages</h3>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <b>{msg.type === "sent" ? "Envoyé à" : "Reçu de"} :</b> {msg.recipient || msg.sender}<br />
            <b>Message :</b> {msg.message}<br />
            <b>Date :</b> {new Date(msg.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageHistory;