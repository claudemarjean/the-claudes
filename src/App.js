import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const events = [
  {
    id: 1,
    date: "15 Juin 2025",
    location: "Lorem Ipsum Dolor",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    date: "22 Juillet 2025",
    location: "Sit Amet Consectetur",
    details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    date: "5 Août 2025",
    location: "Adipiscing Elit",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];


function App() {
  return (
    <div className="container">
      <h1> Titre</h1>
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

export default App;
