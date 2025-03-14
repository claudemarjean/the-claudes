import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./App.css";

const events = [
  {
    id: 1,
    date: "Lorem Ipsum Dolor",
    location: "Lorem Ipsum Dolor",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    date: "Lorem Ipsum Dolor",
    location: "Sit Amet Consectetur",
    details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    date: "Lorem Ipsum Dolor",
    location: "Adipiscing Elit",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
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

      <h1>Liste des Événements</h1>
      <div className="event-grid">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="event-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>{event.date}</h2>
            <p className="location">{event.location}</p>
            <p className="details">{event.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;
