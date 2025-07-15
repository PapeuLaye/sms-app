import React, { useState } from "react";
import axios from "axios";

function SendSMSForm() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    try {
      // Remplacer par gestion réelle du token plus tard
      const token = "ton_token_orange";
      const sender = "221778255669";
      const res = await axios.post("http://localhost:5000/api/sms/send", {
        token,
        sender,
        recipient,
        message,
      });
      setStatus("SMS envoyé !");
    } catch (error) {
      setStatus("Erreur lors de l'envoi");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Numéro destinataire"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Envoyer le SMS</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default SendSMSForm;