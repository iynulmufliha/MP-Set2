import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaTasks, FaEnvelope, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const features = [
    { title: "Notifications", info: "You have 5 new alerts", color: "#b2ebf2", icon: <FaBell />, count: 5 },
    { title: "Tasks", info: "12 pending tasks", color: "#e1f5fe", icon: <FaTasks />, count: 12 },
    { title: "Messages", info: "3 unread messages", color: "#b3e5fc", icon: <FaEnvelope />, count: 3 },
    { title: "Reports", info: "Monthly report ready", color: "#e0f7fa", icon: <FaChartLine />, count: 1 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to EchoWire Dashboard</h2>

      {user && (
        <div style={styles.userCard}>
          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userEmail}>{user.email}</p>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{ ...styles.dashboardCard, background: feature.color }}
            onClick={() => setModalData(feature)}
          >
            <div style={styles.iconWrapper}>
              {feature.icon}
              <span style={styles.countBadge}>{feature.count}</span>
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.info}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div style={styles.modalOverlay} onClick={() => setModalData(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.title}</h3>
            <p>{modalData.info}</p>
            <button style={styles.closeButton} onClick={() => setModalData(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "3rem auto",
    padding: "2rem",
    textAlign: "center",
  },
  heading: {
    color: "#00796b",
    marginBottom: "2rem",
  },
  userCard: {
    background: "linear-gradient(135deg, #b2ebf2, #80deea)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    marginBottom: "2rem",
  },
  userName: {
    margin: "0 0 0.5rem 0",
    color: "#004d40",
  },
  userEmail: {
    margin: "0 0 1rem 0",
    color: "#00695c",
  },
  logoutButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00796b",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1.5rem",
  },
  dashboardCard: {
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    fontWeight: "500",
    color: "#004d40",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    position: "relative",
  },
  iconWrapper: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    position: "relative",
    display: "inline-block",
  },
  countBadge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    background: "#ff5252",
    color: "#fff",
    borderRadius: "50%",
    padding: "0.25rem 0.6rem",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    textAlign: "center",
    color:"#000"
  },
  closeButton: {
    marginTop: "1.5rem",
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00796b",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Dashboard;
