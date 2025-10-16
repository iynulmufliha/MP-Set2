import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to CrisisProject</h1>
      <p className="lead">Your platform to support, volunteer, and track crisis responses.</p>
      <div className="mt-4">
        <Link to="/about" className="btn btn-primary me-2">About Us</Link>
        <Link to="/latest" className="btn btn-secondary me-2">Latest Updates</Link>
        <Link to="/impact" className="btn btn-success">Impact Wall</Link>
      </div>
    </div>
  );
};

export default Home;
