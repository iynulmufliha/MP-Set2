import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import CrisisMap from "../components/CrisisMap";

// Intersection Observer for stats animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
};

const About = () => {
  const stats = [
    { label: "Events Monitored", value: 10000 },
    { label: "Countries Covered", value: 500 },
    { label: "Users Engaged", value: 200000 },
  ];

  const countValues = stats.map(stat => useCountUp(stat.value));

  return (
    <div style={{ padding: "2rem" }}>
      {/* Header */}
      <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", color: "#0077ff" }}>
        About EchoWire
      </h2>
      <p className="text-center mb-5" style={{ fontSize: "1.1rem", color: "#555" }}>
        Our mission is to track global crises in real-time, raise awareness, and enable immediate action.
      </p>

      {/* Mission Highlights */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginBottom: "3rem" }}>
        {[
          { title: "Global Coverage", desc: "Monitor crises happening across continents in real-time." },
          { title: "Verified Reports", desc: "All events are verified by trusted sources before reporting." },
          { title: "Interactive Dashboard", desc: "Visualize trends, stats, and hotspots on our dynamic dashboard." },
          { title: "User Engagement", desc: "Contribute by reporting local events or supporting relief efforts." },
        ].map((item, idx) => (
          <div key={idx} style={missionCardStyle} className="mission-card">
            <h4 style={cardTitleStyle}>{item.title}</h4>
            <p style={cardDescStyle}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 className="mb-3 text-center" style={{ color: "#0077ff" }}>Recent Crises Gallery</h3>
        <Gallery />
      </div>

      {/* Crisis Map Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h4 className="mb-3 text-center" style={{ color: "#0077ff" }}>Interactive Crisis Map</h4>
        <CrisisMap />
      </div>

      {/* Stats Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginBottom: "3rem" }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={statCardStyle}>
            <h3>{countValues[idx].toLocaleString()}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f0f8ff", borderRadius: "8px" }}>
        <h4 style={{ marginBottom: "1rem", color: "#0077ff" }}>Join Our Community</h4>
        <p style={{ marginBottom: "1.5rem", color: "#555" }}>
          Stay updated, report local events, or contribute to global relief efforts.
        </p>
        <button style={ctaButtonStyle} className="cta-button">Get Involved</button>
      </div>
      
    </div>
  );
};

// Styling
const missionCardStyle = {
  width: "220px",
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  backgroundColor: "#fff",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const cardTitleStyle = { color: "#0077ff", marginBottom: "0.5rem" };
const cardDescStyle = { color: "#555", fontSize: "0.95rem" };

const statCardStyle = {
  width: "180px",
  padding: "1.5rem",
  borderRadius: "10px",
  backgroundColor: "#0077ff",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  transition: "transform 0.3s",
};

const ctaButtonStyle = {
  padding: "0.75rem 2rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#0077ff",
  color: "#fff",
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.2s",
};

// Hover Effects (you can put in CSS or inline using classes)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mission-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    });
  });

  document.querySelectorAll(".cta-button").forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.backgroundColor = "#005bb5");
    btn.addEventListener("mouseleave", () => btn.style.backgroundColor = "#0077ff");
  });
});

export default About;
