import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Latest from "./pages/Latest";
import ImpactWall from "./pages/ImpactWall";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Full-width Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* All other pages inside Bootstrap container */}
        <Route
          path="/about"
          element={
            <div className="container my-4">
              <About />
            </div>
          }
        />
        <Route
          path="/latest"
          element={
            <div className="container my-4">
              <Latest />
            </div>
          }
        />
        <Route
          path="/impact"
          element={
            <div className="container my-4">
              <ImpactWall />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="container my-4">
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" />
            ) : (
              <div className="container my-4">
                <Login />
              </div>
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" />
            ) : (
              <div className="container my-4">
                <Register />
              </div>
            )
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <div className="container my-4">
                <Profile />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
