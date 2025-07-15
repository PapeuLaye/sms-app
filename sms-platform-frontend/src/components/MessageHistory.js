import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MessageHistory.css";

function MessageHistory() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history").then((res) => {
      setMessages(res.data);
    });
  }, []);

  return (
    <div className="history-container">
      <h3>Historique des messages</h3>
      {messages.length === 0 ? (
        <div className="history-empty">Aucun message à afficher.</div>
      ) : (
        <ul className="history-list">
          {messages.map((msg) => (
            <li
              className={
                "history-item " + (msg.type === "sent" ? "sent" : "received")
              }
              key={msg.id}
            >
              <div className="history-header">
                <span className="history-icon">
                  {msg.type === "sent" ? "📤" : "📥"}
                </span>
                <span className="history-title">
                  {msg.type === "sent"
                    ? `Envoyé à : ${msg.recipient}`
                    : `Reçu de : ${msg.sender}`}
                </span>
              </div>
              <div className="history-body">{msg.message}</div>
              <div className="history-date">
                {new Date(msg.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MessageHistory;