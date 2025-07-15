import React, { useState } from "react";
import axios from "axios";
import "./SendSMSForm.css";

function SendSMSForm() {
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState(""); // Champ personnalisable
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      // Appel au backend qui gère le token et l’envoi SMS
      await axios.post(
        "http://localhost:5000/api/sms/send",
        {
          sender,
          recipient,
          message,
        }
      );
      setStatus({ type: "success", msg: "SMS envoyé !" });
      setRecipient("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        msg:
          error.response?.data?.error?.message ||
          error.message ||
          "Erreur lors de l'envoi",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="sms-form" onSubmit={handleSubmit}>
      <h2>Envoyer un SMS</h2>
      <div className="input-group">
        <label>Expéditeur (numéro ou nom personnalisé)</label>
        <input
          type="text"
          placeholder="Ex : MONAPP ou +221778255669"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Destinataire</label>
        <input
          type="text"
          placeholder="Ex : +2217XXXXXXXX"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Message</label>
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={160}
        />
        <small>{message.length}/160 caractères</small>
      </div>
      <button type="submit" className="btn-send" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer le SMS"}
      </button>
      {status && (
        <div className={`alert ${status.type}`}>
          {status.msg}
        </div>
      )}
    </form>
  );
}

export default SendSMSForm;