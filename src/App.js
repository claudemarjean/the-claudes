import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./App.css";
import Events from "./Events";

function HomePage() {
  return (
    <div className="container">
      <Helmet>
        <meta name="google" content="notranslate" />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Helmet>

      <h4>404 : célibataires not found!!!</h4>
      <div className="cards">
        {/* Carte pour les détails des événements */}
        <div className="card">
          <div className="card-content">
            <p>Découvrez chaque instant magique de ces jours, juste ici.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
            >
              <Link to="/events">Détails des événements</Link>
            </motion.button>
          </div>
        </div>

        {/* Carte pour le téléversement des photos */}
        <div className="card">
          <div className="card-content">
            <p>Aidez-nous à conserver ces souvenirs inoubliables en partageant vos photos sur notre espace dédié.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn drive"
              onClick={() => window.open("https://drive.google.com/drive/folders/1vpoWsed2dIRBUypa4Xua3UBb61SuVf33", "_blank")}
            >
              Téléverser des photos
            </motion.button>
          </div>
        </div>
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
