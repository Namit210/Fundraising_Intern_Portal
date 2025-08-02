# Fundraising Intern Portal

A simple full-stack portal for fundraising interns, featuring a dashboard, leaderboard, and rewards. Built with Node.js (Express) backend and React frontend. Data is stored in a local JSON file for easy editing.

---

## Features
- **Dummy Login/Signup** (no authentication)
- **Dashboard**: Shows intern name, referral code, total donations, and rewards
- **Leaderboard**: Ranks interns by total donations
- **Attractive, modern UI**
- **Backend**: Node.js + Express, serves data from `backend/data.json`
- **Frontend**: React, fetches and displays data

---

## Project Structure
```
Fundraising_Intern_Portal/
  backend/
    index.js         # Express backend
    data.json        # Data source (edit this to change users/leaderboard)
  frontend/
    ...              # React app
  README.md
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd Fundraising_Intern_Portal
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Start the Backend
```bash
cd ../backend
node index.js
```
- The backend runs on [http://localhost:5000](http://localhost:5000)

### 5. Start the Frontend
```bash
cd ../frontend
npm start
```
- The frontend runs on [http://localhost:3000](http://localhost:3000)

---

## Editing Data
- All user and leaderboard data is stored in `backend/data.json`.
- Edit this file and restart the backend to update the dashboard and leaderboard.

---

## API Endpoints
- `GET /api/user` — Returns intern dashboard data
- `GET /api/leaderboard` — Returns leaderboard data

---

## Screenshots
> Add screenshots here if desired

---

## License
MIT 
