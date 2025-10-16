import React, { useEffect, useState } from "react";
import API from "../api/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");
        setUser(res.data);
      } catch (err) {
        setError("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="col-md-6 mx-auto text-center">
      <h3>Welcome, {user.name}</h3>
      <p className="text-muted">{user.email}</p>
      <p>Account created on: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
