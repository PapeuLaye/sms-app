# SMS Dashboard avec Orange API

Ce projet est une application web composée d’un backend Node.js et d’un frontend React, permettant d’envoyer des SMS via l’API Orange, avec sender personnalisé et consultation de l’historique des messages.

---

## Architecture du projet

Voici la structure générale :

```
SMS-APP/
│
├── backend/
│   ├── node_modules/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── sms-platform-frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    ├── .gitignore
    ├── package.json
    └── package-lock.json
```

---

## Fonctionnalités

- **Envoi de SMS** (avec sender personnalisé ou numéro classique)
- **Historique des messages** (envoyés/reçus), affiché de façon élégante
- **Gestion du token d’authentification** côté backend (sécurité)
- **Design moderne et responsive** (desktop/mobile)
- **Status d’envoi** (succès, erreur, loading)
- **Code React modulaire** (chaque composant a son propre fichier CSS)

---

## Installation & Lancement

### 1. Backend

```sh
cd backend
npm install
# Configure le fichier .env avec tes identifiants Orange API :
# ORANGE_API_CLIENT_ID=ton_client_id
# ORANGE_API_CLIENT_SECRET=ton_client_secret
npm start
```

### 2. Frontend

```sh
cd sms-platform-frontend
npm install
npm start
```

- Le frontend est accessible sur [http://localhost:3000](http://localhost:3000) (par défaut)
- Le backend tourne sur [http://localhost:5000](http://localhost:5000) (par défaut)
- **Vérifie que les URLs des appels API dans le front pointent bien vers le backend.**

---

## Configuration Orange API

1. Crée un compte sur [Orange Developer](https://developer.orange.com/)
2. Récupère ton **client_id** et **client_secret** pour le SMS API
3. Si tu veux un sender name personnalisé, fais-en la demande et attends la validation Orange
4. Place les identifiants dans le fichier `.env` du backend

---

## Fonctionnement des principaux composants (frontend)

- **SendSMSForm** : formulaire d’envoi de SMS (expéditeur personnalisable, destinataire, message, statut)
- **MessageHistory** : affichage de l’historique des messages sous forme de cartes
- **Dashboard** : page principale qui regroupe le formulaire et l’historique

Chaque composant possède son propre fichier CSS dans `src/components/` pour un style modulaire et maintenable.

---

## Sécurité

- Le token Orange API est **géré côté backend** (jamais exposé au frontend)
- Les identifiants sensibles sont stockés dans le fichier `.env` du backend

---

## Personnalisation

- Modifie les fichiers CSS (`SendSMSForm.css`, `MessageHistory.css`, `Dashboard.css`) pour adapter le style à ta charte graphique
- Les composants sont modulaires et facilement extensibles

---

## Contribution

Les PR et issues sont les bienvenus !

---

## Auteur

Projet réalisé par Mouhamed Abdoulaye Ndoye
