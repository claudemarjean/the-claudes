import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./App.css";

const events = [
  {
    id: 1,
    date: "07 Mai 2025",
    evenement : "Évènement : Fiançailles ",
    location: "Lieu : Mananjary",
    horaire : "Horaire : Après-midi",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    date: "09 Mai 2025",
    evenement : "Évènement : Fafy ",
    location: "Lieu :Tsaravary (Mananjary)",
    horaire : "Horaire : Avant-midi",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },{
    id: 3,
    date: "10 Mai 2025",
    evenement : "Évènement : Mariage Civil ",
    location: "Lieu : Fianarantsoa",
    horaire : "Horaire : 12H00",
    stepOne: "*Cocktail*",
    stepTwo : "Départ pour la célébration à Andoharegna (Mahasoabe).",
    stepThree : "🎉Ambiance soirée jusqu’à l’aube 😉"
  }
];

function Events() {
  const navigate = useNavigate();

  return (
    <div className="events-container">
      {/* Flèche de retour sans texte */}
      <motion.button
        className="back-button"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft className="icon" />
      </motion.button>

      <h1>Liste des Évènements</h1>
      <div className="event-grid">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="event-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>{event.date}</h2>
            <p className="details">{event.evenement}</p>
            <p className="location">{event.location}</p>
            <p className="details">{event.horaire}</p>
            {
              event.id === 3 && (
                <>
                  <p className="details">{event.stepOne}</p>
                  <p className="details">-----------------</p>
                  <p className="details">{event.stepTwo}</p>
                  <p className="details">{event.stepThree}</p>
                </>
              )
            }

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;
