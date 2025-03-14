import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Events from "./Events";

function HomePage() {
  return (
    <div className="container">
      <h1>Bienvenue</h1>
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
        >
          <Link to="/events">Voir les événements</Link>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn drive"
          onClick={() => window.open("https://drive.google.com/drive/folders/1vpoWsed2dIRBUypa4Xua3UBb61SuVf33", "_blank")}
        >
          Accéder au Drive
        </motion.button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
